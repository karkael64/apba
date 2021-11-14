<script>
	import config from "./footer.config.json";
</script>

<footer>
	<h3>Plan du site :</h3>
	<nav>
		<ul>
			{#each config as line}
				<li>
					<a href={line.href}>{line.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<center>
		Tout droit réservé, voir les <a class="bottom" href="/cgu">mentions légales</a>, voir et modifier votre
		<a class="bottom" href="/privacy">politique de gestion de vos informations et de vos cookies</a>.
	</center>
</footer>

<style>
	footer {
		padding: 1em 3em;
	}
	ul {
		column-count: 3;
		column-gap: 4em;
		column-rule: 1px solid var(--minus);
	}

	a.bottom {
		color: var(--pansyPurple);
	}
	a.bottom:hover {
		border-bottom: 1px solid currentColor;
	}
</style>
