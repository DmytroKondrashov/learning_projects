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

<div class="relative">
  <button
  onclick={() => showDropdown = !showDropdown}
  class="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700"
  title="Toggle theme"
  >
    {#if $theme === 'light'}
    ☀️
    {:else if $theme === 'dark'}
      🌙
    {:else}
      🖥️
    {/if}
  </button>
</div>
