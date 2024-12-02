import React from 'react';
import { Header } from './components/Header';
import { BetForm } from './components/BetForm';
import { LocationVerifier } from './components/LocationVerifier';
import { BetCard } from './components/BetCard';
import type { Bet } from './types';

const DEMO_GYM = {
  latitude: 40.7128,
  longitude: -74.0060,
  name: "NYC Fitness Center"
};

function App() {
  const [currentBet, setCurrentBet] = React.useState<Bet | null>(null);
  const [isVerified, setIsVerified] = React.useState(false);

  const handleBetSubmit = (amount: number) => {
    setCurrentBet({
      id: Date.now().toString(),
      amount,
      gymLocation: DEMO_GYM,
      deadline: new Date(Date.now() + 24 * 60 * 60 * 1000),
      isCompleted: false,
    });
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
    if (currentBet) {
      setCurrentBet({ ...currentBet, isCompleted: true });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {!currentBet ? (
            <BetForm onSubmit={handleBetSubmit} />
          ) : (
            <>
              <BetCard bet={currentBet} isVerified={isVerified} />
              {!isVerified && (
                <LocationVerifier
                  gymLocation={currentBet.gymLocation}
                  onVerificationSuccess={handleVerificationSuccess}
                />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;