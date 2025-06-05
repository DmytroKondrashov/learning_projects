<script lang="ts">
  let { src = $bindable(), alt } = $props();
</script>

<div class="modal" class:is-active={src !== null} onclick={() => src = null}>
  <div class="modal-background"></div>
    <iframe {src} title={alt} loading="lazy" frameborder="0" 
    allowfullscreen width='1280px' height='720px'></iframe>
</div>

<style>
.iframe-container {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  iframe {
    z-index: 1000;
  }
</style>