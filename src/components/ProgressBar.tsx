import React from 'react';
import { Trophy } from 'lucide-react';

interface ProgressBarProps {
  level: number;
  points: number;
  questionsAnswered: number;
}

export function ProgressBar({ level, points, questionsAnswered }: ProgressBarProps) {
  const progress = (questionsAnswered % 5) * 20; // 5 questions per level

  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-semibold text-gray-700">Level {level}</span>
        </div>
        <span className="text-sm font-medium text-gray-600">{points} points</span>
      </div>
      
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}