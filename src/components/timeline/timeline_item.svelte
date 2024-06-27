<script lang="ts">
	import type { Item } from './timeline';

	export let item: Item;
</script>

<p class="company">{item.company}</p>
<div class="wrapper">
	<p class="position">{item.position}</p>
	<p class="date">{item.dateStart}</p>
</div>

<style lang="scss">
	li {
		text-align: center;
		border-radius: 10px;
		border: dashed 2px var(--black2);
		margin-top: 1em;
	}

	.company {
		font-family: 'Fira Mono', monospace;
		letter-spacing: -1px;
		font-weight: 500;
	}

	.company::before {
		content: '└─ ';
		margin-left: -0.5em;
		color: var(--black2);
		font-size: 1.2em;
		font-family: 'Fira Mono', monospace;
		font-weight: 500;
		padding-left: 1em;
	}

	.position {
		font-size: 0.9em;
		color: var(--black6);
	}

	.wrapper {
		padding-left: 2.5em;
	}

	.date {
		font-size: 0.9em;
		font-family: 'Fira Mono', monospace;
	}

	@media only screen and (max-width: 600px) {
		.company::before {
			content: '--';
			margin-right: 0.5em;
			color: var(--black2);
			font-size: 1.2em;
			font-family: 'Fira Mono', monospace;
			font-weight: 500;
			padding-left: 1em;
			float: left;
		}
	}
</style>
