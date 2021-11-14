<script context="module" lang="ts">
	import { ImageLoader, FullSection, ThumbDefinition, Button, Buttons } from 'components';

	export const prerender = true;
</script>

<svelte:head>
	<title>APBA - Accueil</title>
</svelte:head>

<FullSection backgroundImage="index.jpg" height="80vh">
	<div class="splash">
		<h1>
			Bienvenue sur le site web de <strong>APBA</strong>
			<small>Association des Parents du Bois l'Abbé (Champigny-sur-Marne)</small>
		</h1>
		<Buttons
			list={[
				{ href: '/parents-eleves', text: "Vous êtes un parent du Bois l'Abbé", color: 'primary' },
				{ href: '/login', text: 'Vous êtes déjà inscrit', color: 'secondary' }
			]}
		/>
	</div>
</FullSection>

<div class="flex">
	<ThumbDefinition pictureUrl="school8.jpg" pictureAlt="salle de classe avec des élèves">
		<h2>Parents d'élèves</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente omnis, asperiores esse
			obcaecati voluptate ut unde dolorum, non perspiciatis totam autem laborum sequi mollitia quia
			tempore consectetur officia? Ex?
		</p>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident mollitia assumenda quos, a
			velit commodi expedita hic blanditiis neque ex at sint quis labore illo in iste fuga nostrum
			eveniet?
		</p>
		<center>
			<Button href="/parents-eleves" color="primary">Plus de détails&hellip;</Button>
		</center>
	</ThumbDefinition>
	<ThumbDefinition pictureUrl="bois-labbe4.jpg" pictureAlt="bâtiment du bois l'abbé">
		<h2>Habitants du Bois l'Abbé</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus explicabo. Odio
			non nisi quibusdam aliquam nam voluptas, itaque consequatur. Excepturi reiciendis nihil, minus
			ipsam natus laboriosam fuga impedit ut.
		</p>
		<center>
			<Button href="/quartier">Plus de détails&hellip;</Button>
		</center>
	</ThumbDefinition>
</div>

<FullSection height="80vh">
	<div class="split-background">
		<ImageLoader src="cook.jpg" alt="cuisiner vue de dessus" />
		<ImageLoader src="sewing2.jpg" alt="couture vu de près" />
	</div>
	<div class="splash left">
		<p>Voir toutes les activités d'APBA</p>
		<Buttons
			list={[
				{ href: '/quartier', text: 'Convivialité de quartier', color: 'primary' },
				{ href: '/activites', text: 'Bien-être et santé', color: 'secondary' },
				{ href: '/solidarites', text: 'Solidarités', color: 'primary' }
			]}
		/>
		<div class="buttons" />
	</div>
</FullSection>

<div class="flex">
	<ThumbDefinition pictureUrl="recipe.jpg" pictureAlt="plat sain végétarien">
		<h2>Diététique et bien-être</h2>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aliquam modi amet!
			Aspernatur nemo, quidem quod saepe nesciunt tempore, dolor laboriosam sint fugiat possimus
			labore quis eligendi? Cumque, libero eum.
		</p>
		<center>
			<Button href="/quartier">Plus de détails&hellip;</Button>
		</center>
	</ThumbDefinition>
	<ThumbDefinition pictureUrl="cook5.jpg" pictureAlt="famille caline">
		<h2>Activités en famille</h2>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptate, quod quo
			tempore at quasi repellendus quis sit nihil reprehenderit blanditiis maiores, odit ullam
			repellat aliquam, veniam perferendis similique dolore?
		</p>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aut perspiciatis sequi neque?
			Magnam, aut eum mollitia deleniti dolorum quasi eos dolor, quibusdam ab doloremque culpa totam
			nisi cum in!
		</p>
		<center>
			<Button href="/quartier" color="primary">Plus de détails&hellip;</Button>
		</center>
	</ThumbDefinition>
</div>

<style>
	.splash {
		position: absolute;
		bottom: 5em;
		right: 10em;
		background: linear-gradient(var(--negative), var(--minus));
		color: var(--positive);
		width: 40em;
		padding: 2em 3em;
		border-radius: 1em;
	}

	.splash > h1 {
		display: inline-block;
		font-size: 2em;
		font-weight: normal;
	}

	.splash > h1 > small {
		display: block;
		font-size: 0.7em;
		font-style: italic;
		opacity: 0.6;
	}

	.splash.left {
		left: 10em;
		right: auto;
	}

	.flex {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;
		background: linear-gradient(var(--negative), var(--minus));
		padding: 5em 0;
	}

	.buttons {
		display: flex;
		position: absolute;
		right: -5em;
		bottom: -2em;
		color: var(--negative);
	}

	.buttons > * {
		font-weight: 600;
		padding: 1em 2em;
		cursor: pointer;
		user-select: none;
	}

	.buttons > *:first-child {
		border-top-left-radius: 1em;
		border-bottom-left-radius: 1em;
	}

	.buttons > *:last-child {
		border-top-right-radius: 1em;
		border-bottom-right-radius: 1em;
	}

	.buttons > *:nth-child(even) {
		background-color: var(--primary);
	}

	.buttons > *:nth-child(odd) {
		background-color: var(--secondary);
	}

	.split-background {
		display: flex;
		height: 100%;
	}
</style>
