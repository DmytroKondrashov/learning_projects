<script lang="ts">
  import Nested from "../components/Nested.svelte"
  import Counter from '../components/Counter.svelte'
  import ColorPicker from "../components/ColorPicker.svelte";

  let name = "Svelte"
  let src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTojBf4VJCGR4Z-QxG-7GozKDuWjCst6z6Q&s"
  let rawHTML = `this string contains some <strong>HTML</strong>`
  let count = $state(0)
  let numbers = $state([1, 2, 3, 4, 5])
  let total = $derived(numbers.reduce((acc, curr) => acc + curr, 0))

  function increment () {
    count += 1;
  }

  function addNumber() {
    numbers.push(numbers.length + 1);
  }
  $inspect(numbers);

  let elapsed = $state(0)
  let interval = $state(1000)
  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1;
    }, interval)

    return () => {clearInterval(id)}
  })
</script>

<h1>Hello {name.toUpperCase()}</h1>
<img {src} alt="A cat">
<p>This is a paragraph</p>
<Nested />
<Nested answer={'42'}/>
<div>{@html rawHTML}</div>

<p>The count is {count}</p>
<button onclick={increment}>Increment the count</button>

{#if count > 10}
  <p>The count is greater than 10</p>
{:else if count > 5}
  <p>The count is greater than 5</p>
{:else} 
  <p>The count is less than 5</p>
{/if}

<p>{numbers.join(" + ")} = {total}</p>
<button onclick={addNumber}>Add a number</button>

<p>Elapsed time: {elapsed} seconds</p>
<button onclick={() => interval /= 2}>Speed up</button>
<button onclick={() => interval *= 2}>Slow down</button>

<br>
<br>
<br>
<Counter />
<Counter />
<Counter />

<br><br><br>
<ColorPicker />
<style>
  p {
    color: goldenrod;
    font-family: serif;
    font-size: 2em;
  }
</style>
