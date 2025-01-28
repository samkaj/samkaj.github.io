<script lang="ts">
	import Header from './header.svelte';
</script>

<article>
	<Header text="whoami" accent="green" />
	<p class="intro">
		I'm Samuel Kajava, a developer situated in Gothenburg, Sweden. I'm a PhD student at
		Chalmers University of Technology.
	</p>
	<p>
        Prior to my PhD studies, I have graduated from the software engineering <i>civilingenjör</i> program
        with a bachelor's degree in software engineering and master's degree in computer science. My BSc thesis
        covers a way of introducing performance benchmarking into CI pipelines on GitHub, with scalability in mind.
        
        My master thesis work introduced a fully automatic approach for detecting prototype pollution in client-side 
		<span class="node">JavaScript</span>. 
	</p>
	<p>
		I basically live in Neovim and would label my interests as language-agnostic, but most of my
		experience lies in files which end with
		<span class="go">.go</span>,
		<span class="rust">.rs</span>,
		<span class="cpp">.cpp</span>,
		<span class="java">.java</span> and
		<span class="node">.ts</span>.
		I host my projects on <a href="https://github.com/samkaj">GitHub</a>, and will always be the
		most up to date source of what I am working on.
	</p>
	<Header text="todo" accent="pink" />
    <p>
        <i>I love teaching, and as any self-absorbed programmer, I want to tell everyone what I'm thinking. 
        I'm looking into writing some blog-esque stuff where I express my thoughts about programming.</i>
    </p>
</article>

<style lang="scss">
	article {
		grid-area: whoami;
	}
</style>
