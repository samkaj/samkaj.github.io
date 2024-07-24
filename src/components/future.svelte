<script>
	import Header from './header.svelte';
</script>

<div class="h1">
	<Header accent="pink" text="work with me" />
</div>
<div class="h2">
	<Header accent="green" text="some projects" />
</div>
<article>
	<main>
		<p class="intro">
			I am graduating soon, and looking for new opportunities! If you want to connect with me, hit
			me up on <a href="https://linkedin.com/in/samuel-kajava">LinkedIn</a> or send an email to
			<a href="mailto:samuelkajava@proton.me">samuelkajava@proton.me</a>!
		</p>
		<p>
			I have experience in distributed systems, testing, fullstack web development and would love to
			work on projects utilizing C++, Golang or Node. I thrive in projects on a comprehensible
			scale. This can range from microservices to larger projects with clear separation of concerns
			and good documentation.
		</p>
		<p>
			At Chalmers, I have learned a lot about object oriented design and can appreciate readable
			code. While OOP is sometimes clunky (<i>read three-line functions and bloated abstractions</i
			>), I still think most practices are very valuable in any paradigm. I see this mindset as a
			strength and you can expect me to write code which reflects this philosophy. Domain does not
			really matter, I just want to write readable, fast code.
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
