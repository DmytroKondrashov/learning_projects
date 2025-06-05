<script lang="ts">
  let { src = $bindable(), alt } = $props();
</script>

<div class="modal" class:is-active={src !== null} onclick={() => src = null}>
  <div class="modal-background"></div>
  <div class="modal-content">
    <p class="image">
      <img {src} {alt} />
    </p>
  </div>
</div>

<style>

  .modal-content {
    position: relative;
  }
</style>
