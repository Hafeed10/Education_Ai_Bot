import React from 'react';
import { Timer, Brain } from 'lucide-react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  timeLeft: number;
}

export function QuestionCard({ question, onAnswer, timeLeft }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="w-6 h-6 text-indigo-600" />
          <span className="text-sm font-medium text-gray-600">{question.category}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-bold">{timeLeft}s</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.text}</h3>
      
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full text-left px-6 py-4 rounded-lg border-2 border-gray-200 
                     hover:border-indigo-500 hover:bg-indigo-50 transition-all
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="font-medium text-gray-700">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}