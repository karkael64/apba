<script>
	import config from "./footer.config.json";
</script>

<footer>
	<nav>
		<h3>Plan du site :</h3>
		<ul>
			{#each config as line}
				<li>
					<a href={line.href}>{line.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<p>
		Tout droit réservé, voir les <a class="bottom" href="/cgu">mentions légales</a>, voir et modifier votre
		<a class="bottom" href="/privacy">politique de gestion de vos informations et de vos cookies</a>.
	</p>
</footer>

<style>
	footer {
		padding: 1em 3em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	ul {
		column-count: 3;
		column-gap: 4em;
		column-rule: 1px solid var(--minus);
		width: 60em;
	}

	a.bottom {
		color: var(--sinopia);
	}
	a.bottom:hover {
		border-bottom: 1px solid currentColor;
	}
</style>
