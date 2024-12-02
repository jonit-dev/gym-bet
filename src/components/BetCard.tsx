import React from 'react';
import { Clock, MapPin, DollarSign } from 'lucide-react';
import type { Bet } from '../types';

interface BetCardProps {
  bet: Bet;
  isVerified: boolean;
}

export const BetCard: React.FC<BetCardProps> = ({ bet, isVerified }) => {
  const timeLeft = () => {
    const now = new Date();
    const diff = bet.deadline.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Current Bet</h2>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-gray-700">
          <div className="bg-blue-50 p-2 rounded-lg">
            <DollarSign className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Bet Amount</p>
            <p className="font-semibold">${bet.amount.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <div className="bg-blue-50 p-2 rounded-lg">
            <MapPin className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Gym Location</p>
            <p className="font-semibold">{bet.gymLocation.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Clock className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Time Remaining</p>
            <p className="font-semibold">{timeLeft()}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className={`rounded-lg p-4 ${
            isVerified ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
          }`}>
            <p className="font-medium">
              {isVerified ? '✓ Verified! You won the bet!' : '⏳ Pending verification'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};