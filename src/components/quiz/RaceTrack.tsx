import React from 'react';
import { Car } from 'lucide-react';

interface RaceTrackProps {
  progress: number;
  level: number;
}

export function RaceTrack({ progress, level }: RaceTrackProps) {
  return (
    <div className="relative w-full h-24 bg-gray-800 rounded-xl mb-8 overflow-hidden">
      {/* Track markings */}
      <div className="absolute inset-0 flex items-center">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="h-4 w-12 bg-yellow-400 mx-8"
            style={{ opacity: i % 2 ? 0.5 : 0.8 }}
          />
        ))}
      </div>
      
      {/* Car position */}
      <div 
        className="absolute bottom-2 transition-all duration-500 transform"
        style={{ left: `${progress}%` }}
      >
        <Car className="w-12 h-12 text-red-500 transform -rotate-90" />
      </div>
      
      {/* Level indicator */}
      <div className="absolute top-2 right-4 bg-white px-3 py-1 rounded-full">
        <span className="text-sm font-bold">Level {level}/5</span>
      </div>
    </div>
  );
}