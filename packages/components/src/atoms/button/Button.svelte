<script>
	export let color = "secondary";
	export let shape = "round";
	export let href;
</script>

{#if href}
	<a {href} type="button" class={`button ${color} ${shape}`}><slot /></a>
{:else}
	<button type="button" class={`button ${color} ${shape}`} on:click>
		<slot />
	</button>
{/if}

<style>
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;

		padding: 0 1em;
		border: 0;
		height: 2.5em;

		cursor: pointer;
		user-select: none;
		color: white;

		font-size: 1rem;
		font-weight: 700;
		line-height: 1;

		transition: all 0.2s;
	}

	.button:hover {
		box-shadow: inset 0 0 1.2em 0 #8888;
	}

	.primary {
		background: var(--primary);
	}

	.secondary {
		background: var(--secondary);
	}

	.square {
		border-radius: none;
	}

	.round {
		border-radius: 4px;
	}

	.circle {
		border-radius: 4em;
	}
</style>
