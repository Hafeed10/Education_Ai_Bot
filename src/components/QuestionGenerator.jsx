import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import Button from "./Button";
import Input from "./Input";
import "../App.css";

const QuestionCard = ({ question, index }) => (
  <Card className="mb-4">
    <CardContent>
      <div className="space-y-4">
        <h4 className="font-semibold text-lg">
          Question {index + 1}: {question.question}
        </h4>
        <div className="space-y-2 pl-4">
          {question.options.map((option, optIndex) => (
            <div
              key={optIndex}
              className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50"
            >
              <span className="font-medium min-w-[24px]">
                {String.fromCharCode(65 + optIndex)})
              </span>
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const QuestionGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateQuestions = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/generate-questions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate questions");
      }

      const data = await response.json();
      setQuestions(
        Object.entries(data.questions).map(([question, options]) => ({
          question,
          options,
        }))
      );
    } catch (error) {
      setError("There was an error generating questions. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 items-container">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="cardHeader">
          <CardTitle className="text-center heading">
            Question Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="cardContent">
          <div className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a topic or concept..."
                disabled={loading}
                error={!!error}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>

            <Button
              onClick={handleGenerateQuestions}
              disabled={loading || !prompt.trim()}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating...
                </div>
              ) : (
                "Generate Questions"
              )}
            </Button>

            {questions.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Generated Questions:
                </h3>
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <QuestionCard
                      key={index}
                      question={question}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionGenerator;
