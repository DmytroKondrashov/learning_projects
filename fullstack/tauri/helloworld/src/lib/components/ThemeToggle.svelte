<script lang='ts'>
  import { theme } from '../stores/themeStore';
  import type { Theme } from '../stores/themeStore';

  let showDropdown = $state(false);

  const themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '🖥️' },
  ];

  function selectTheme(t: Theme) {
    theme.set(t);
    showDropdown = false;
  }
</script>
