<script lang="ts">
  let { src, alt, visible = false, onclick, onPrev, onNext } = $props();
</script>

<div class="modal" class:is-active={visible}>
  <div class="modal-background" {onclick}></div>
  <div class="modal-content">
    <p class="image">
      <img src={src} alt={alt} />
    </p>
    <button class="modal-prev" onclick={onPrev}>
      <span class="icon">
        <i class="fas fa-chevron-left"></i>
      </span>
    </button>
    <button class="modal-next" onclick={onNext}>
      <span class="icon">
        <i class="fas fa-chevron-right"></i>
      </span>
    </button>
  </div>
</div>

<style>
  .modal-content {
    position: relative;
  }
  
  .modal-prev,
  .modal-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 1rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  .modal-prev:hover,
  .modal-next:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-prev {
    left: 1rem;
  }

  .modal-next {
    right: 1rem;
  }

  .icon {
    font-size: 1.5rem;
  }
</style>
