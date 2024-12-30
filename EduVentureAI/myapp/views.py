import logging
from openai import OpenAI
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PromptSerializer
import requests
from requests.exceptions import RequestException
import time

class GenerateQuestions(APIView):
    def __init__(self):
        # Initialize the OpenAI client in __init__ with retry configuration
        self.client = OpenAI(
            base_url="https://integrate.api.nvidia.com/v1",
            api_key="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",
            timeout=30  # Add timeout
        )
        self.logger = logging.getLogger(__name__)

    def post(self, request):
        serializer = PromptSerializer(data=request.data)
        if serializer.is_valid():
            prompt = serializer.validated_data['prompt']
            try:
                questions = self.generate_questions(prompt)
                if 'error' in questions:
                    return Response(questions, status=status.HTTP_503_SERVICE_UNAVAILABLE)
                return Response(questions, status=status.HTTP_200_OK)
            except Exception as e:
                self.logger.error(f"Unexpected error in post: {str(e)}")
                return Response(
                    {"error": "Internal server error"}, 
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def generate_questions(self, prompt):
        """Generate questions with retry mechanism"""
        max_retries = 3
        retry_delay = 1  # seconds

        for attempt in range(max_retries):
            try:
                completion = self.client.chat.completions.create(
                    model="meta/llama-3.1-405b-instruct",
                    messages=[{
                        "role": "user", 
                        "content": self._format_prompt(prompt)
                    }],
                    temperature=0.6,
                    top_p=0.8,
                    max_tokens=2048,
                    stream=True
                )

                # Initialize empty string to collect all content
                full_content = ""
                questions = []

                # Collect streaming content with timeout handling
                try:
                    for chunk in completion:
                        if chunk.choices[0].delta.content:
                            content = chunk.choices[0].delta.content
                            full_content += content
                            questions.append(content)
                            self.logger.debug(f"Received chunk: {content[:50]}...")
                except Exception as stream_error:
                    self.logger.error(f"Streaming error: {str(stream_error)}")
                    if attempt < max_retries - 1:
                        time.sleep(retry_delay)
                        continue
                    return {"error": "Streaming error occurred"}

                # Process the collected content
                if full_content:
                    processed_questions = self.split_questions(full_content)
                    return processed_questions
                
                return {"error": "No content generated"}

            except RequestException as e:
                self.logger.error(f"Connection error on attempt {attempt + 1}: {str(e)}")
                if attempt < max_retries - 1:
                    time.sleep(retry_delay)
                    continue
                return {"error": "Connection error after retries"}
            
            except Exception as e:
                self.logger.error(f"Unexpected error: {str(e)}")
                return {"error": str(e)}

    def _format_prompt(self, prompt):
        """Format the prompt with clear instructions"""
        return (
            "Generate multiple-choice questions following this format:\n"
            "**Question text here?**\n"
            "A) First option\n"
            "B) Second option\n"
            "C) Third option\n"
            "D) Fourth option\n\n"
            f"Topic: {prompt}\n"
            "Make sure each question starts and ends with ** markers."
        )

    def split_questions(self, content):
        """Improved question splitting logic"""
        if isinstance(content, list):
            content = ''.join(content)

        # Split the content by ** markers
        parts = content.split('**')
        questions_dict = {}
        
        for i in range(1, len(parts) - 1, 2):
            question_text = parts[i].strip()
            if i + 1 < len(parts):
                options_text = parts[i + 1].strip()
                
                # Process options
                options = []
                current_option = ""
                for line in options_text.split('\n'):
                    line = line.strip()
                    if line.startswith(('A)', 'B)', 'C)', 'D)')):
                        if current_option:
                            options.append(current_option.strip())
                        current_option = line[2:].strip()
                    elif current_option and line:
                        current_option += " " + line
                
                if current_option:
                    options.append(current_option.strip())

                if question_text and options:
                    questions_dict[question_text] = options

        return {"questions": questions_dict}