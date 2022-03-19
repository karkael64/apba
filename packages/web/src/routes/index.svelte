<script context="module" lang="ts">
	import { SectionSplash, SectionThumbs } from "components";
	export const prerender = true;
</script>

<svelte:head>
	<title>APBA - Accueil</title>
</svelte:head>

<SectionSplash
	backgroundImages={['/temp/index.jpg']}
	height="80vh"
	buttonList={[
		{ href: '/blog/parents', text: "Vous êtes un parent du Bois l'Abbé", color: 'primary' },
		{ href: '/login', text: 'Vous êtes déjà inscrit', color: 'secondary' }
	]}
	body={`
	<h1>
		Bienvenue sur le site web de <strong>APBA</strong>
		<br />
		<small>Association des Parents du Bois l'Abbé (Champigny-sur-Marne)</small>
	</h1>`}
/>

<SectionThumbs
	thumbs={[
		{
			pictureUrl: '/temp/school8.jpg',
			pictureAlt: 'salle de classe avec des élèves',
			buttonHref: '/blog/parents',
			body: `
		<h2>Parents</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente omnis, asperiores esse
			obcaecati voluptate ut unde dolorum, non perspiciatis totam autem laborum sequi mollitia quia
			tempore consectetur officia? Ex?
		</p>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident mollitia assumenda quos, a
			velit commodi expedita hic blanditiis neque ex at sint quis labore illo in iste fuga nostrum
			eveniet?
		</p>`
		},
		{
			pictureUrl: '/temp/bois-labbe4.jpg',
			pictureAlt: "bâtiment du bois l'abbé",
			buttonHref: '/blog/quartier',
			buttonColor: 'secondary',
			body: `
		<h2>Habitants du Bois l'Abbé</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus explicabo. Odio
			non nisi quibusdam aliquam nam voluptas, itaque consequatur. Excepturi reiciendis nihil, minus
			ipsam natus laboriosam fuga impedit ut.
		</p>`
		}
	]}
/>

<SectionSplash
	height="80vh"
	backgroundImages={['/temp/cook.jpg', '/temp/sewing2.jpg']}
	body={`<p>Voir toutes les activités d'APBA</p>`}
	buttonList={[
		{ href: '/blog/quartier', text: 'Convivialité de quartier', color: 'primary' },
		{ href: '/blog/activites', text: 'Bien-être et santé', color: 'secondary' },
		{ href: '/blog/solidarites', text: 'Solidarités', color: 'primary' }
	]}
	variant="left"
/>

<SectionThumbs
	thumbs={[
		{
			pictureAlt: 'plat sain végétarien',
			pictureUrl: '/temp/recipe.jpg',
			buttonHref: '/blog/activites',
			body: `
		<h2>Diététique et bien-être</h2>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aliquam modi amet!
			Aspernatur nemo, quidem quod saepe nesciunt tempore, dolor laboriosam sint fugiat possimus
			labore quis eligendi? Cumque, libero eum.
		</p>`
		},
		{
			pictureAlt: 'famille caline',
			pictureUrl: '/temp/cook5.jpg',
			buttonHref: '/blog/solidarites',
			buttonColor: 'secondary',
			body: `
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
		</p>`
		}
	]}
/>
