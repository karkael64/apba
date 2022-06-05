<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params: { slug }, fetch }) => {
		const req = await fetch(`/api/blogs/${slug}`);
		try {
			const { blog } = await req.json();
			return { props: { blog } };
		} catch (e) {
			return { error: "Error", status: 500 };
		}
	};
</script>

<script lang="ts">
	import type { Blog, BlogSection } from '$lib/db';
	import { SectionThumbs, SectionSplash } from 'components';
	export let blog: null | Blog & { sections: BlogSection[] };
</script>

<div>
	<h3>{blog?.title}</h3>
	<p>{blog?.body}</p>
</div>

{#each blog?.sections as section (section.id)}
	{#if section.model === "SectionThumbs"}
		<SectionThumbs {...JSON.parse(section.json)} />
	{:else if section.model === "SectionSplash"}
		<SectionSplash {...JSON.parse(section.json)} />
	{/if}
{/each}
