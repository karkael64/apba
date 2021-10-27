<script lang="ts">
	import { onMount } from "svelte";
	import { init, register, getLocaleFromNavigator, waitLocale } from "svelte-i18n";

	export let buildRoute = (langCode: string) => `/api/i18n/${langCode}.json`;
	let done = false;

	onMount(async () => {
		const lang = getLocaleFromNavigator().toLocaleLowerCase();
		const langs = [lang];

		const subindex = lang.indexOf("-");
		if (subindex != -1) {
			langs.push(lang.substring(0, subindex));
		}

		if (!langs.includes("en")) {
			langs.push("en");
		}

		langs.forEach((l) => {
			register(l, async () => (await fetch(buildRoute(l))).json());
		});
		init({ fallbackLocale: "en", initialLocale: lang });

		await Promise.any(langs.map((l) => waitLocale(l)));
		done = true;
	});
</script>

{#if done}
	<slot />
{/if}
