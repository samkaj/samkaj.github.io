<script lang="ts">
	import Future from '../components/future.svelte';
	import Me from '../components/me.svelte';
	import Timeline from '../components/timeline/timeline.svelte';
	import Whoami from '../components/whoami.svelte';
</script>

<div class="page">
	<Whoami />
	<Me />
	<Timeline />
	<Future />
</div>

<style lang="scss">
	.page {
		display: grid;
		width: 90vw;
		max-width: 1920px;
		margin: auto;
		grid-template-columns: 0.5fr repeat(2, 1fr);
		grid-template-rows: auto;
		grid-template-areas:
			'me whoami whoami'
			'timeline timeline timeline'
			'header1 . header2'
			'future future future';
		gap: 2em;
		align-items: center;
	}

	@media only screen and (max-width: 1200px) {
		.page {
			width: 90vw;
			grid-template-columns: 1fr;
			grid-template-areas:
				'me'
				'whoami'
				'timeline'
				'header1'
				'future';
		}
	}
</style>
