<script lang="ts">
	import type { User } from "@supabase/supabase-js";
  import { supabase } from "../db";
  import { onMount } from "svelte";

  export let user: User;
  let todoLists = [];

  onMount(() => {
    fetchTodoLists();
  });

  const fetchTodoLists = async () => {
    let { data, error } = await supabase
      .from("todo_lists")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log("error", error);
    } else {
      todoLists = data;
    }
  };
</script>

<div>
  <h1>Todo Lists</h1>
  <ul>
    {#each todoLists as todoList}
      <li>{todoList.name}</li>
    {/each}
  </ul>
</div>
