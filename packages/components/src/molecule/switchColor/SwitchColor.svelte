<script>
	import { colorScheme } from "../../provider/color/colorScheme";
	import Button from "../../button/Button.svelte";
	const toggleColorScheme = () => colorScheme.update((current) => (current === "light" ? "dark" : "light"));
</script>

<Button shape="circle" on:click={toggleColorScheme}>{$colorScheme === "light" ? "🌘" : "☀️"}</Button>
