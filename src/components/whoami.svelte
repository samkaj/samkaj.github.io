<script lang="ts">
	import Header from './header.svelte';
</script>

<div>
	<Header text="whoami" accent="green" />
	<article>
		<p>
			I'm Samuel Kajava, a developer situated in Gothenburg, Sweden. I'm a master's student at
			Chalmers University of Technology and a software developer at Ericsson.
		</p>
		<p>
			I basically live in Neovim and would label my interests as language-agnostic, but most of my
			experience lies in files which end with
			<span class="go">.go</span>,
			<span class="rust">.rs</span>,
			<span class="cpp">.cpp</span>,
			<span class="java">.java</span> and
			<span class="node">.ts</span>.
		</p>
		<p>
			I host my projects on <a href="https://github.com/samkaj">GitHub</a>, and will always be the
			most up to date source of what I am working on.
		</p>
	</article>
</div>

<style lang="scss">
	article {
		margin-left: 1em;
		grid-area: whoami;
	}
	.go,
	.rust,
	.cpp,
	.java,
	.node {
		color: var(--black7);
		border: solid 1px;
		border-radius: 0.4em;
		padding: 0.1em 0.2em;
		margin: 0.2em;
		font-size: 0.9em;
		font-family: 'Fira Mono', monospace;
	}

	.go {
		border-color: var(--cyan);
		color: var(--cyan);
		background-color: var(--transparent-cyan);
	}

	.rust {
		border-color: var(--red);
		color: var(--red);
		background-color: var(--transparent-red);
	}

	.node {
		border-color: var(--blue);
		color: var(--blue);
		background-color: var(--transparent-blue);
	}

	.java {
		border-color: var(--yellow);
		color: var(--yellow);
		background-color: var(--transparent-yellow);
	}

	.cpp {
		border-color: var(--green);
		color: var(--green);
		background-color: var(--transparent-green);
	}
</style>
