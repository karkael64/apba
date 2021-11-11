<script>
	import ImageLoader from "../../molecule/imageLoader/ImageLoader.svelte";

	import SwitchColor from "../../molecule/switchColor/SwitchColor.svelte";
</script>

<header>
	<nav>
		<ul>
			<li>
				<ImageLoader src="apba-ghosts.svg" width={60} height={60} alt="Icon of APBA" />
			</li>
			<li>
				<a href="/">APBA - Accueil</a>
			</li>
			<li>
				<a href="/agenda">Agenda</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
			<li>
				<a href="/cgu">Mentions légales</a>
			</li>
			<li>
				<a href="/privacy">Vie privée</a>
			</li>
		</ul>
		<ul>
			<li>
				<SwitchColor />
			</li>
			<li>
				<a href="/login">Connexion</a>
			</li>
			<li>
				<a href="/logout">Déconnexion</a>
			</li>
			<li>
				<a href="/profile">Paramètres</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		background: var(--pansyPurple);
		color: var(--positive);
		font-weight: 600;
	}

	ul {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
		padding: 0;
		margin: 0;
	}

	a,
	a:active,
	a:focus,
	a:focus-visible,
	a:visited {
		display: inline-block;
	}

	li > * {
		padding: 1em;
	}
</style>
