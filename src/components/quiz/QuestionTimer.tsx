import React from 'react';
import { Timer } from 'lucide-react';

interface QuestionTimerProps {
  timeLeft: number;
  totalTime: number;
}

export function QuestionTimer({ timeLeft, totalTime }: QuestionTimerProps) {
  const percentage = (timeLeft / totalTime) * 100;
  
  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`absolute h-full transition-all duration-1000 rounded-full ${
          percentage > 50 ? 'bg-green-500' : percentage > 20 ? 'bg-yellow-500' : 'bg-red-500'
        }`}
        style={{ width: `${percentage}%` }}
      />
      <div className="absolute -top-6 right-0 flex items-center space-x-1">
        <Timer className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-600">{timeLeft}s</span>
      </div>
    </div>
  );
}