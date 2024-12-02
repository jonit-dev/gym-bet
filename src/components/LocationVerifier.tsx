import React from 'react';
import { MapPin, Navigation, AlertCircle } from 'lucide-react';
import { LocationState } from '../types';
import { isWithinRange } from '../utils/location';

interface LocationVerifierProps {
  gymLocation: { latitude: number; longitude: number };
  onVerificationSuccess: () => void;
}

export const LocationVerifier: React.FC<LocationVerifierProps> = ({
  gymLocation,
  onVerificationSuccess,
}) => {
  const [location, setLocation] = React.useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  const verifyLocation = () => {
    if (!navigator.geolocation) {
      setLocation(prev => ({ ...prev, error: 'Geolocation is not supported' }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude, error: null });
        
        if (isWithinRange(latitude, longitude, gymLocation.latitude, gymLocation.longitude)) {
          onVerificationSuccess();
        }
      },
      (error) => {
        setLocation(prev => ({ ...prev, error: error.message }));
      }
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Location Verification</h2>
      </div>
      
      <div className="p-6 space-y-4">
        {location.error && (
          <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p>{location.error}</p>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900">Verify Your Location</h3>
              {location.latitude && location.longitude ? (
                <div className="mt-2">
                  <p className="text-sm text-blue-700">Current coordinates:</p>
                  <p className="font-mono text-sm text-blue-900">
                    {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-blue-700">
                  Click the button below to verify you're at the gym
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={verifyLocation}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg transition-all font-medium text-lg"
        >
          <Navigation className="w-5 h-5" />
          Verify My Location
        </button>
      </div>
    </div>
  );
};