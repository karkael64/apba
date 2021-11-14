<script lang="ts">
	export let list: { href?: string; color: string; text: string }[];
</script>

<div class="buttons">
	{#each list as { href, color = "secondary", text = "" }}
		{#if href}
			<a {href} type="button" class={`button ${color}`}>{text}</a>
		{:else}
			<button type="button" class={`button ${color}`} on:click>
				<slot />
			</button>
		{/if}
	{/each}
</div>

<style>
	.buttons {
		display: flex;
		position: absolute;
		right: -5em;
		bottom: -2em;
		color: var(--negative);
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;

		padding: 0.5em 1em;
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

	.buttons > *:first-child {
		border-top-left-radius: 0.5em;
		border-bottom-left-radius: 0.5em;
	}

	.buttons > *:last-child {
		border-top-right-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
	}
</style>
