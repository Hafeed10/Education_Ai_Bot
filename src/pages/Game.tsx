import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RaceTrack } from '../components/quiz/RaceTrack';
import { SpeedometerProgress } from '../components/quiz/SpeedometerProgress';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { questions } from '../data/questions';
import type { GameState, Question } from '../types';

export function GamePage() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: null,
    progress: {
      level: 1,
      points: 0,
      questionsAnswered: 0,
      answers: {}
    },
    isLoading: false
  });

  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    const levelQuestions = questions.filter(q => q.level === gameState.progress.level);
    const answeredQuestions = Object.keys(gameState.progress.answers);
    const unansweredQuestions = levelQuestions.filter(q => !answeredQuestions.includes(q.id));
    
    if (unansweredQuestions.length > 0) {
      setGameState(prev => ({
        ...prev,
        currentQuestion: unansweredQuestions[0]
      }));
    } else if (gameState.progress.level < 5) {
      setGameState(prev => ({
        ...prev,
        progress: {
          ...prev.progress,
          level: prev.progress.level + 1
        }
      }));
    } else {
      navigate('/suggestions');
    }
  }, [gameState.progress.level, gameState.progress.answers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          handleAnswer(selectedAnswer || gameState.currentQuestion?.options[0] || '');
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.currentQuestion, selectedAnswer]);

  const handleAnswer = (answer: string) => {
    if (!gameState.currentQuestion) return;

    setSelectedAnswer(answer);
    
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        progress: {
          ...prev.progress,
          points: prev.progress.points + timeLeft,
          questionsAnswered: prev.progress.questionsAnswered + 1,
          answers: {
            ...prev.progress.answers,
            [prev.currentQuestion!.id]: answer
          }
        }
      }));
      setTimeLeft(30);
      setSelectedAnswer(null);
    }, 1000);
  };

  if (!gameState.currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">Preparing next level...</div>
      </div>
    );
  }

  const progress = (gameState.progress.questionsAnswered % 5) * 20;

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <RaceTrack 
          progress={progress} 
          level={gameState.progress.level} 
        />
        
        <SpeedometerProgress 
          points={gameState.progress.points} 
          timeLeft={timeLeft} 
        />
        
        <QuestionCard
          question={gameState.currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          disabled={!!selectedAnswer}
        />
      </div>
    </div>
  );
}