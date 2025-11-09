import { writable } from 'svelte/store';
import type { AppSettings } from '../types';

const defaultSettings: AppSettings = {
  currency: 'USD',
  darkMode: false,
  defaultView: 'dashboard',
};

function createSettingsStore() {
  const { subscribe, set, update } = writable<AppSettings>(defaultSettings);

  return {
    subscribe,
    set,
    update: (updates: Partial<AppSettings>) => {
      update(settings => ({ ...settings, ...updates }));
    },
    reset: () => set(defaultSettings),
  };
}

export const settings = createSettingsStore();
