<script lang="ts">
	export let text = '';
	export let accent: 'green' | 'pink' | 'yellow' = 'pink';
</script>

<h1><span class={'prefix ' + accent}>> </span>{text}</h1>

<style lang="scss">
	h1 {
		font-size: 1.5em;
		margin-bottom: 0;
	}

	.prefix {
		font-size: 0.7em;
	}

	.green {
		color: var(--green);
	}

	.pink {
		color: var(--pink);
	}

	.yellow {
		color: var(--yellow);
	}
</style>
