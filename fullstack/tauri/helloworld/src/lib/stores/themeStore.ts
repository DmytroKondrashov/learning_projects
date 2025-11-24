import { writable } from "svelte/store";

export type Theme = 'light' | 'dark' | 'system';

let systemThemeListener: (() => void) | null = null;

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;

  const isDark = theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.remove('dark');
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
}

function createThemeStore() {
  const storedTheme = typeof window !== 'undefined' 
    ? (localStorage.getItem('theme') as Theme || 'system')
    : 'system';

  const { subscribe, set, update } = writable<Theme>(storedTheme);

  // Apply theme on initialization
  if (typeof window !== 'undefined') {
    applyTheme(storedTheme);
    
    // Set up listener for system theme changes
    if (storedTheme === 'system') {
      setupSystemThemeListener();
    }
  }

  return {
    subscribe,
    set: (newTheme: Theme) => {
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
      
      // Update listener based on theme
      if (newTheme === 'system') {
        setupSystemThemeListener();
      } else {
        removeSystemThemeListener();
      }
      
      set(newTheme);
    },
    update
  };
}

function setupSystemThemeListener() {
  if (typeof window === 'undefined') return;
  
  // Remove existing listener if any
  removeSystemThemeListener();
  
  // Create new listener
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => {
    const currentTheme = localStorage.getItem('theme') as Theme || 'system';
    if (currentTheme === 'system') {
      applyTheme('system');
    }
  };
  
  // Modern browsers
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handler);
    systemThemeListener = () => mediaQuery.removeEventListener('change', handler);
  } else {
    // Fallback for older browsers
    mediaQuery.addListener(handler);
    systemThemeListener = () => mediaQuery.removeListener(handler);
  }
}

function removeSystemThemeListener() {
  if (systemThemeListener) {
    systemThemeListener();
    systemThemeListener = null;
  }
}

export const theme = createThemeStore();
