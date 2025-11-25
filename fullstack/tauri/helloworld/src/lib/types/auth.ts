export interface User {
  id: string;
  email: string;
  createdAt: number;
}

export interface Session {
  userId: string;
  email: string;
  token: string;
  createdAt: number;
  expiresAt: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  session: Session | null;
  error: string | null;
  isLoading: boolean;
}
