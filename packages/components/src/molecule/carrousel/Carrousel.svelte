<script lang="ts">
	type CarrouselPicture = {
		src: string;
		alt: string;
	};

	let pictures: CarrouselPicture[] = [];
	let height: string | number = 600;
	let duration = 3000;

	console.log({ pictures });

	const heightString = typeof height === "number" ? `${height}px` : height;
</script>

<div class="carrousel" style={`height: ${heightString}`}>
	{#each pictures as pict}
		<img src={pict.src} alt={pict.alt} />
	{/each}
</div>

<style>
	.carrousel {
		overflow: hidden;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
</style>
