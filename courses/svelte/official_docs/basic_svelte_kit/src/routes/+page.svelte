<script>
  let { data, form } = $props();
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';

	let creating = $state(false);
	let deleting = $state([]);
</script>

<h1>home</h1>

<div class="centered">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<!-- Easy way with using form actions -->
	<!-- <form 
		method="POST" 
		action="?/create" 
		use:enhance={() => {
			creating = true;
			return async ({ update }) => {
				await update();
				creating = false;
			}
		}}
	> -->

	<label>
		add a todo:
		<!-- Easy way with using form actions -->
		<!-- <input
			name="description"
			autocomplete="off"
			required
			value={form?.description ?? ''}
			disabled={creating}
		/> -->

		<!-- Hard way using POST -->
		<input 
			type="text"
			autocomplete='off'
			onkeydown={async (e) => {
				if (e.key !== 'Enter') return;

				const input = e.currentTarget;
				const description = input.value;

				const response = await fetch('/todo', {
					method: 'POST',
					body: JSON.stringify({ description }),
					headers: {
						'Content-Type': 'application/json',
					}
				})

				const { id } = await response.json();

				const todos = [...data.todos, {
					id,
					description
				}];

				data = { ...data, todos };

				input.value = '';
			}}
		/>
	</label>
<!-- </form> -->

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				<label>
					<input
						type="checkbox"
						checked={todo.done}
						onchange={async (e) => {
							const done = e.currentTarget.checked;

							// TODO handle change
						}}
					/>
					<span>{todo.description}</span>
					<button
						aria-label="Mark as complete"
						onclick={async (e) => {
							// TODO handle delete
						}}
					></button>
				</label>
			</li>
		{/each}
	</ul>

	{#if creating}
		<span class="saving">saving...</span>
	{/if}
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		/* background: url(./remove.svg) no-repeat 50% 50%; */
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
