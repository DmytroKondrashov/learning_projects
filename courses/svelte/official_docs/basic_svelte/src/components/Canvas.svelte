<script>
  let { color, size } = $props();

  let canvas = $state();
  let context = $state();
  let coords = $state();

  $effect(() => {
    context = canvas.getContext('2d');
    resize();
  })

  function resize() {
    canvas.width = 500;
    canvas.height = 500;
  }
</script>

<svelte:window onresize={resize} />

<canvas bind:this={canvas}
  onpointerdown={(e) => {
    coords = { x: e.offsetX, y: e.offsetY };

    context.fillStyle = color;
    context.beginPath()
    context.arc(coords.x, coords.y, size / 2, 0, 2 * Math.PI);
    context.fill();
  }}
  onpointerleave={() => {
    coords = null;
  }}
  onpointermove={(e) => {
    const previous = coords;
    coords = { x: e.offsetX, y: e.offsetY };

    if (e.buttons === 1) {
      e.preventDefault();
      context.strokeStyle = color;
      context.lineWidth = size;
      context.lineCap = 'round';
      context.lineJoin = 'round';

      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(coords.x, coords.y);
      context.stroke();
    }
  }}
></canvas>

{#if coords}
	<div
		class="preview"
		style="--color: {color}; --size: {size}px; --x: {coords.x}px; --y: {coords.y}px"
	></div>
{/if}

<style>
	canvas {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.preview {
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: var(--size);
		height: var(--size);
		transform: translate(-50%, -50%);
		background: var(--color);
		border-radius: 50%;
		opacity: 0.5;
		pointer-events: none;
	}
</style>
