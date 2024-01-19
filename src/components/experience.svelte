<script lang="ts">
	export let role: string = '';
	export let description: string = '';
	export let period: string = '';
	export let year: string = '';
	export let company: string;
</script>

<li>
	<span class="top">
		<span class="year">{year}</span>
		<h2 class="role">{role}</h2>
		<span class="period">{period}</span>
		<h3 class="company">{company}</h3>
	</span>
	<p class="description">{description}</p>
</li>

<style lang="scss">
	p {
		text-align: justify;
	}

	li {
		border-left: solid 1px var(--border);
		padding-left: 1em;
	}

	.top {
		display: flex;
		align-items: center;
		gap: 1em;

		.company {
			margin-left: auto;
		}

		& > * {
			margin: 0;
		}
	}

	.year {
		display: block;
		background: var(--fg);
		color: var(--bg);
		padding: 0.4em 0.7em;
		float: left;
		margin-right: 0.5em;
		border-radius: 0.5em;
		font-size: 1em;
	}

	p {
		color: var(--fg-lighter);
	}

	* {
		font-family: 'Titillum Web', sans-serif;
		color: var(--fg);
	}

	.role {
		font-size: 1.5em;
	}

	@media only screen and (max-width: 600px) {
		li {
			border-left: none;
			padding-left: 0;
		}

		.top {
			* {
				font-size: 1em;
			}
		}

		p {
			padding-bottom: 1em;
		}

		.year {
			display: none;
		}
	}
</style>
