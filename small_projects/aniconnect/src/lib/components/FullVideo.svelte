<script lang="ts">
  let { src, alt, visible = false, onclick } = $props();
  console.log(src);
</script>

<div class="modal" class:is-active={visible}>
  <div class="modal-background" {onclick}></div>
  <div class="modal-content is-full-height is-full-width">
    <iframe {src} title={alt} loading="lazy" frameborder="0" allowfullscreen></iframe>
  </div>
</div>