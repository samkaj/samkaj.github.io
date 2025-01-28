<script>
	import Header from './header.svelte';
</script>

<div class="h1">
	<Header accent="pink" text="about me" />
</div>
<div class="h2">
	<Header accent="green" text="some projects" />
</div>
<article>
	<main>
		<p class="intro">
            Whenever I have time over, I enjoy playing 🎱 pool, tweaking my ❄️  NixOS system, spending time with 
            my partner+friends, and hacking on various personal projects.
		</p>
		<p>
            As of 2025, my main goals are to do good security research, learn more about programming language design and
            static analysis, and hopefully find a nice intersection between those ambitions. I strongly believe robust language 
            design inherently improves security - something which motivates me greatly!
		</p>
        <p>
            My past experiences, through both industry, academia and personal work, has provided me with a great toolset
            of technologies. I have experience in distributed systems, compiler design and fullstack web development,
            which all help me in my research and teaching.
        </p>
	</main>

	<aside>
		<ul>
			<li>
				<a href="https://github.com/samkaj/maker" class="rust">maker</a> - a Makefile generator for C/C++
				projects. Nice for small projects, I use it for generating boilerplate Makefiles in my projects.
			</li>
			<li>
				<a href="https://apskrift.com" class="node">apskrift</a> - typing practice website written in
				vanilla TS with node.
			</li>
			<li>
				<a href="https://github.com/samkaj/nadja" class="node">nadja</a> - Spotify playlist generator
				created with React.
			</li>
			<li>
				<a href="https://github.com/samkaj/ftp" class="cpp">ftp</a> - an FTP client written from scratch
				in C++.
			</li>
			<li>
				<a href="https://github.com/samkaj/tda596-http" class="go">http</a> - static http server with
				proxy written from scratch in Go.
			</li>
			<li>More on <a href="https://github.com/samkaj">GitHub</a> :)</li>
		</ul>
	</aside>
</article>

<style lang="scss">
	div {
		margin-top: -3em;
	}

	li {
		line-height: 1.5em;
		margin-bottom: 2px;
	}

	.h1 {
		grid-area: header1;
	}

	.h2 {
		grid-area: header2;
	}

	article {
		grid-area: future;
		margin-top: -2em;
	}

	article {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		grid-template-areas: 'main list';
		gap: 1em;

		main {
			grid-area: 'main';
		}

		aside {
			grid-area: 'list';
		}
	}
	@media only screen and (max-width: 1200px) {
		div {
			margin-top: 0;
		}
		article {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-areas: 'main ';
			gap: 2em;
		}

		aside,
		.h2 {
			display: none;
		}
	}
</style>
