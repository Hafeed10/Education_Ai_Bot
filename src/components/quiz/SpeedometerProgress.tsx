import React from 'react';
import { Gauge } from 'lucide-react';

interface SpeedometerProgressProps {
  points: number;
  timeLeft: number;
}

export function SpeedometerProgress({ points, timeLeft }: SpeedometerProgressProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="bg-gray-900 rounded-xl p-4 flex items-center space-x-3">
        <Gauge className="w-6 h-6 text-green-400" />
        <div>
          <div className="text-xs text-gray-400">Speed Score</div>
          <div className="text-xl font-bold text-white">{points}</div>
        </div>
      </div>
      
      <div className="flex-1 bg-gray-800 rounded-full h-4 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-green-300 transition-all duration-300"
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        />
      </div>
    </div>
  );
}