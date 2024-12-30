import React, { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthFormProps {
  onSubmit: (email: string, password: string, name?: string) => void;
  type: 'login' | 'signup';
}

export function AuthForm({ onSubmit, type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, type === 'signup' ? name : undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'signup' && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {type === 'login' ? (
          <>
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </>
        ) : (
          <>
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </>
        )}
      </button>
    </form>
  );
}