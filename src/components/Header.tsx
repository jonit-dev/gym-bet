import React from 'react';
import { Dumbbell } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg">
            <Dumbbell className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">GymBet</h1>
            <p className="text-blue-100 text-sm">Bet on yourself, get fit!</p>
          </div>
        </div>
      </div>
    </header>
  );
};