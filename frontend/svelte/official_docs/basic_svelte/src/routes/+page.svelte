<script lang="ts">
  import Nested from "../components/Nested.svelte"

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
</script>

<h1>Hello {name.toUpperCase()}</h1>
<img {src} alt="A cat">
<p>This is a paragraph</p>
<Nested />
<div>{@html rawHTML}</div>

<p>The count is {count}</p>
<button on:click={increment}>Increment the count</button>

<p>{numbers.join(" + ")} = {total}</p>
<button on:click={addNumber}>Add a number</button>

<style>
  p {
    color: goldenrod;
    font-family: serif;
    font-size: 2em;
  }
</style>
