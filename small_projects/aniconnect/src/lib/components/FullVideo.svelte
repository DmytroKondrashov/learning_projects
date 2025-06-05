<script lang="ts">
  let { src = $bindable(), alt } = $props();
</script>

<div class="modal" class:is-active={src !== null} onclick={() => src = null}>
  <div class="modal-background"></div>
  <div class="modal-content is-full-height is-full-width">
    <div class="iframe-container">
      <iframe {src} title={alt} loading="lazy" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
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
    width: 100%;
    height: 100%;
    max-width: 800px;
  }
</style>