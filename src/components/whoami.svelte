<script lang="ts">
	import Header from './header.svelte';
</script>

<article>
	<Header text="whoami" accent="green" />
	<p class="intro">
		I'm Samuel Kajava, a developer situated in Gothenburg, Sweden. I'm a master's student at
		Chalmers University of Technology and a software developer at Ericsson.
	</p>
	<p>
		I have a bachelor's degree in Software Engineering since 2023. My thesis focused on automating
		performance tests in Java projects and incorporating it in CI pipelines on GitHub. I'm currently
		pursuing a master's degree in Computer Systems and Networks, expected to graduate in January
		2025. My master's thesis explores the security of browser extensions.
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

<style lang="scss">
	article {
		grid-area: whoami;
	}
</style>
