<script context="module" lang="ts">
	import { client } from '$lib/db';
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({
		page: {
			params: { slug }
		}
	}) => {
		return { props: { slug } };
	};
</script>
