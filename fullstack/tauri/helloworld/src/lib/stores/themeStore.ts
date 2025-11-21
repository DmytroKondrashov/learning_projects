import { writable } from "svelte/store";

type Theme = 'light' | 'dark' | 'system';

function createThemeStore() {
  const storedTheme = typeof window ! == 'undefined' ? localStorage.getItem('theme') as Theme || 'system'
  : 'system';

  const { subscribe, set } = writable<Theme>(storedTheme);

  return {
    subscribe,
    set: (theme: Theme) => {
      localStorage.setItem('theme', theme);
      applyTheme(theme);
      set(theme);
    }
  }
}

function applyTheme(theme: Theme) {
  if (typeof document == 'undefined') return;

  const isDark = theme === 'dark' || 
  (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const theme = createThemeStore();

if (typeof window !== 'undefined') {
  applyTheme(localStorage.getItem('theme') as Theme || 'system')
}
