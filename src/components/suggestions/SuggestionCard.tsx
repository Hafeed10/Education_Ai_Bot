import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';
import type { CareerSuggestion } from '../../types';

interface SuggestionCardProps {
  suggestion: CareerSuggestion;
}

export function SuggestionCard({ suggestion }: SuggestionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Briefcase className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-800">{suggestion.title}</h3>
        </div>
        <span className="px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
          {suggestion.matchPercentage}% Match
        </span>
      </div>

      <p className="text-gray-600 mb-6">{suggestion.description}</p>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-700 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          <span>Recommended Courses</span>
        </h4>
        
        <div className="space-y-3">
          {suggestion.courses.map((course, index) => (
            <a
              key={index}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{course.title}</span>
                <span className="text-sm text-gray-500">{course.platform}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}