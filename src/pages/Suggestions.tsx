import React from 'react';
import { Sparkles } from 'lucide-react';
import { SuggestionCard } from '../components/suggestions/SuggestionCard';
import type { CareerSuggestion } from '../types';

const mockSuggestions: CareerSuggestion[] = [
  {
    title: 'Software Developer',
    description: 'Based on your responses, you show strong analytical skills and enjoy problem-solving. A career in software development would allow you to utilize these strengths while working on innovative projects.',
    matchPercentage: 92,
    courses: [
      {
        title: 'Complete Web Development Bootcamp',
        platform: 'Udemy',
        url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/'
      },
      {
        title: 'CS50: Introduction to Computer Science',
        platform: 'edX',
        url: 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x'
      }
    ]
  },
  {
    title: 'UX/UI Designer',
    description: 'Your creative problem-solving abilities and interest in user experience make you well-suited for a career in UX/UI design. This role combines creativity with technical skills.',
    matchPercentage: 85,
    courses: [
      {
        title: 'Google UX Design Professional Certificate',
        platform: 'Coursera',
        url: 'https://www.coursera.org/professional-certificates/google-ux-design'
      },
      {
        title: 'UI/UX Design Specialization',
        platform: 'Coursera',
        url: 'https://www.coursera.org/specializations/ui-ux-design'
      }
    ]
  }
];

export function SuggestionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Your Career Matches</h1>
          </div>
          <p className="text-gray-600">Based on your responses, here are your personalized career suggestions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {mockSuggestions.map((suggestion, index) => (
            <SuggestionCard key={index} suggestion={suggestion} />
          ))}
        </div>
      </div>
    </div>
  );
}