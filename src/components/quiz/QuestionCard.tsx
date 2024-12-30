import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  disabled: boolean;
}

export function QuestionCard({ question, onAnswer, selectedAnswer, disabled }: QuestionCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-xl w-full max-w-2xl">
      <div className="flex items-start space-x-3 mb-6">
        <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
        <h3 className="text-xl font-bold text-white">{question.text}</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            disabled={disabled}
            className={`
              w-full text-left px-6 py-4 rounded-lg border-2 transition-all
              ${selectedAnswer === option 
                ? 'border-green-500 bg-green-500/20 text-white' 
                : 'border-gray-700 hover:border-gray-500 text-gray-300 hover:bg-gray-800'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}