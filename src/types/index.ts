export interface Bet {
  id: string;
  amount: number;
  gymLocation: {
    latitude: number;
    longitude: number;
    name: string;
  };
  deadline: Date;
  isCompleted: boolean;
}

export interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}