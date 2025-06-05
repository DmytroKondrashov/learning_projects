<script lang="ts">
  let { src, alt, visible = false, onclick } = $props();
  console.log(src);
</script>

<div class="modal" class:is-active={visible}>
  <div class="modal-background" {onclick}></div>
  <div class="modal-content is-full-height is-full-width">
    <div class="iframe-container">
      <iframe {src} title={alt} loading="lazy" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>

<style>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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