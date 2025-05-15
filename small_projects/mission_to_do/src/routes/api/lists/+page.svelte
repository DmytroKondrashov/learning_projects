<script>
	import { onMount } from "svelte";

  let lists = [];

  onMount(async () => {
    const res = await fetch('/api/lists');
    lists = await res.json();
  });
</script>

<ul>
  {#each lists as list}
    <li>
      <h2>{list.name}</h2>
      <ul>
        {#each list.todo_items as item}
          <li>{item.name} - {item.done ? '✅' : '❌'}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
