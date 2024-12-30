import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Rocket, Brain, Target } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-12 h-12 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-900">EduVenture</h1>
          </div>
          <p className="text-2xl text-gray-600 mb-8 max-w-2xl">
            "Embark on a journey to discover your perfect career path through engaging challenges"
          </p>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-indigo-600"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Brain className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-gray-600">
                Answer questions that adapt to your interests and skills
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Level Up</h3>
              <p className="text-gray-600">
                Progress through 5 exciting levels of career discovery
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">
                Receive personalized career suggestions based on your performance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            EduVenture is an innovative career guidance platform that combines 
            gamification with career assessment. Our mission is to help students 
            and professionals discover their ideal career paths through engaging, 
            interactive experiences.
          </p>
        </div>
      </div>
    </div>
  );
}