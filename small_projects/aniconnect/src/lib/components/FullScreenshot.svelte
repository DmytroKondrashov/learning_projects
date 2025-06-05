<script lang="ts">
  let { src = $bindable(), alt } = $props();
</script>

<div class="modal" class:is-active={src !== null} onclick={() => src = null}>
  <div class="modal-background"></div>
    <img {src} {alt} width='1280px' height='720px' style="z-index: 1000;" />
</div>
