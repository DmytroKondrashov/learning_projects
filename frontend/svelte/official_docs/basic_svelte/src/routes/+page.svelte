<script lang="ts">
  let name = "Svelte"
  let src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTojBf4VJCGR4Z-QxG-7GozKDuWjCst6z6Q&s"
</script>

<h1>Hello {name.toUpperCase()}</h1>
<img {src} alt="A cat">
<p>This is a paragraph</p>

<style>
  p {
    color: goldenrod;
    font-family: serif;
    font-size: 2em;
  }
</style>
