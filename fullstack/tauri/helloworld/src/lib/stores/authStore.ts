import type { AuthState } from "$lib/types/auth";
import { writable } from "svelte/store";

const initialState = {
  isAuthenticated: false,
  user: null,
  session: null,
  error: null,
  isLoading: false,
}

function createAuthStore() {
  const { subscribe, set, update } = writable<AuthState>(initialState);

  return {
    subscribe,

    register: async(email: string, password: string) => {
      update(state => ({...state, isLoading: true, error: null}))
      try {
        
      } catch (error) {
        
      }
    }
  }
}

export const auth = createAuthStore();
