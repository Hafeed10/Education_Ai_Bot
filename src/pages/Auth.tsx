import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { AuthForm } from '../components/auth/AuthForm';

interface AuthPageProps {
  type: 'login' | 'signup';
}

export function AuthPage({ type }: AuthPageProps) {
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string, name?: string) => {
    // TODO: Implement actual authentication
    console.log('Auth submitted:', { email, password, name });
    navigate('/game');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">Career Quest AI</h1>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {type === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm type={type} onSubmit={handleSubmit} />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {type === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}