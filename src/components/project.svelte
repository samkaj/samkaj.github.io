<script lang="ts">
	export let heading: string;
	export let description: string;
	export let src: string;
	export let alt: string;
	export let github: string;
	export let keywords: string[];
	export let date: string;
</script>

<div class="project">
	<img {src} {alt} />
	<h1>{heading}</h1>
	<p>{description}</p>
	<ul id="keywords">
		{#each keywords as keyword}
			<li class="keyword">{keyword}</li>
		{/each}
	</ul>
	<br />
	<p>
		<a href={github}><i class="fa-brands fa-github no-invert" /> Repository</a>
		<span class="date">{date}</span>
	</p>
</div>

<style lang="scss">
	.project {
		display: block;
		border-radius: 10px;
		padding: 0 1em;
	}

	#keywords {
		display: flex;
		padding: 0;
		list-style: none;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		margin-bottom: 0;
	}

	.keyword {
		float: left;
		margin-right: 0.6em;
		border-radius: 50px;
		background: var(--fg);
		color: var(--bg);
		padding: 3px 15px;
		font-weight: bold;
	}

	img {
		width: 100%;
		margin-bottom: -10px;
	}

	a,
	p,
	h1 {
		text-align: center;
		margin: 0;
	}

	a {
		font-size: large;
		&:hover {
			color: var(--secondary);
		}
	}

	.no-invert:hover {
		background: none;
		color: var(--fg);
	}

	.date {
		color: var(--fg-lighter);
		padding-left: 0.5em;
		margin-left: 0.5em;
	}
</style>
