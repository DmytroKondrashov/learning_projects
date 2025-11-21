type Theme = 'light' | 'dark' | 'system';

function createThemeStore() {
  const storedTheme = typeof window ! == 'undefined' ? localStorage.getItem('theme') as Theme || 'system'
  : 'system';

  
}
