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
