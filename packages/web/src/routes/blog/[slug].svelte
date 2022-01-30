<script context="module" lang="ts">
	import { Blog, client } from '$lib/db';
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params: { slug } }) => {
		const blog = await client.blog.findFirst({ where: { slug } });
		return { props: { blog } };
	};
</script>

<script lang="ts">
	export let blog: Blog;
</script>

<div>
	<h3>{blog.title}</h3>
	<p>{blog.body}</p>
</div>
