<script lang="ts">
	type CarrouselPicture = {
		src: string;
		alt: string;
	};

	export let pictures: CarrouselPicture[];
	export let height: string | number = 600;
	export let duration = 5000;

	const heightString = typeof height === "number" ? `${height}px` : height;
	let scroll: HTMLDivElement | null = null;

	const getScrollPosition = (pictureRank: number) => {
		if (scroll) {
			const divWidth = scroll.clientWidth;
			const scrollWidth = scroll.scrollWidth;
			const picturesWidth: number[] = Array.prototype.map.call(
				scroll.querySelectorAll("img"),
				(img: HTMLImageElement) => img.clientWidth
			);
			const pictureCenterPosition = picturesWidth.reduce((sum, width, index) => {
				if (index < pictureRank) {
					return sum + width;
				}
				if (index === pictureRank) {
					return sum + width / 2;
				}
				return sum;
			}, 0);

			return Math.max(0, Math.min(scrollWidth - divWidth, pictureCenterPosition - divWidth / 2)) - scroll.scrollLeft;
		}
	};

	const scrollToPicture = (pictureRank: number) => {
		if (scroll) {
			return scroll.scrollBy({ left: getScrollPosition(pictureRank), behavior: "smooth" });
		}
	};

	let picture = 0;
	let timeoutId = 0;

	const pauseScroll = () => {
		clearTimeout(timeoutId);
	};

	const resumeScroll = () => {
		nextScroll();
	};

	const nextScroll = () => {
		timeoutId = setTimeout(() => {
			picture += 1;
			scrollToPicture(picture % pictures.length);
			nextScroll();
		}, duration) as unknown as number;
	};

	nextScroll();
</script>

<div
	class="carrousel"
	style={`height: ${heightString}`}
	bind:this={scroll}
	on:mouseover={pauseScroll}
	on:focus={pauseScroll}
	on:mouseleave={resumeScroll}
	on:blur={resumeScroll}>
	<div class="scroll">
		{#each pictures as { src, alt } (src)}
			<img {src} {alt} />
		{/each}
	</div>
</div>

<style>
	.carrousel {
		height: 100%;
		width: 100%;
		overflow: auto;
	}

	.scroll {
		height: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	img {
		height: 100%;
	}
</style>
