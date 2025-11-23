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

  {#if showDropdown}
    <div
      class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
    >
      {#each themes as t}
        <button
          onclick={() => selectTheme(t.value)}
          class="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2 {$theme === t.value
            ? 'bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
            : 'text-gray-700 dark:text-gray-300'}"
          >
          <span>{t.icon}</span>
          <span class="font-medium">{t.label}</span>
          {#if $theme === t.value}
            <span class="ml-auto">✓</span>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
