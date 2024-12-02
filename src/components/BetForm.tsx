import React from 'react';
import { DollarSign, Timer, Trophy } from 'lucide-react';

interface BetFormProps {
  onSubmit: (amount: number) => void;
}

export const BetForm: React.FC<BetFormProps> = ({ onSubmit }) => {
  const [amount, setAmount] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const betAmount = parseFloat(amount);
    if (!isNaN(betAmount) && betAmount > 0) {
      onSubmit(betAmount);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Make a Gym Bet</h2>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Trophy className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900">Challenge Yourself</h3>
              <p className="text-sm text-blue-700">Bet on your commitment to hit the gym</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Timer className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900">24 Hour Window</h3>
              <p className="text-sm text-blue-700">Complete your gym visit within 24 hours</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              How much would you like to bet?
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                min="1"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 text-lg rounded-lg border-gray-300"
                placeholder="0.00"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all font-medium text-lg"
          >
            Place Bet
          </button>
        </form>
      </div>
    </div>
  );
};