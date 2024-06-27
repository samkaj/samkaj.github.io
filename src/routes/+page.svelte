<script lang="ts">
	import Timeline from '../components/timeline/timeline.svelte';
	import Whoami from '../components/whoami.svelte';
</script>

<div class="page">
	<Whoami />
	<Timeline />
</div>

<style lang="scss">
	.page {
		display: grid;
		width: 80vw;
		margin: auto;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		grid-template-areas:
			'whoami pic'
			'timeline timeline';
		gap: 1em;
	}

	@media only screen and (max-width: 600px) {
		.page {
			width: 90vw;
			grid-template-columns: 1fr;
			grid-template-areas:
				'whoami'
				'timeline';
		}
	}
</style>
