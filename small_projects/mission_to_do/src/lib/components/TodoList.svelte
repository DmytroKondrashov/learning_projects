<script>
  export let list;
</script>

<h2>{list.name}</h2>
<ul>
  {#each list.todo_items as item}
    <li>
      <input type="checkbox" bind:checked={item.done} />
      <span>{item.name}</span>
      {#if item.due_date}<small>{item.due_date}</small>{/if}
    </li>
  {/each}
</ul>
