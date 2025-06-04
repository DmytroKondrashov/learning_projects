<script lang="ts">
  let { src, alt, visible = false, onclick } = $props();
</script>

<div class="modal" class:is-active={visible}>
  <div class="modal-background" {onclick}></div>
  <div class="modal-content">
    <p class="image">
      <img src={src} alt={alt} {onclick} />
    </p>
  </div>
</div>
