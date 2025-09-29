<script lang="ts">
	import '../css/nav.scss';
	import '../css/main.scss';
</script>

<svelte:head>
	<title>Samuel Kajava</title>
</svelte:head>

<nav>
	<h3>
		<span class="pink">{'</> '}</span>samkaj
	</h3>
	<ul>
		<li>
			<a href="https://linkedin.com/in/samuel-kajava"><i class="nf nf-fa-linkedin" /></a>
		</li>
		<li class="pink">,</li>
		<li><a href="https://github.com/samkaj"><i class="nf nf-md-github" /></a></li>
		<li class="pink">,</li>
		<li><a href="mailto:samuelkajava@proton.me"><i class="nf nf-md-at" /></a></li>
	</ul>
</nav>

<main>
	<slot />
</main>

<style lang="scss">
	@import 'https://www.nerdfonts.com/assets/css/webfont.css';

	nav {
		display: flex;
		align-content: space-between;
		font-size: 1.1rem;
		width: 90vw;
		max-width: 1920px;
		margin: auto;

		h3 {
			width: 100%;
			letter-spacing: -1px;
		}

		ul {
			list-style-type: none;
			align-items: center;
			display: flex;
			gap: 0.5rem;
		}

		ul::before,
		ul::after {
			font-family: 'Fira Mono', monospace;
			color: var(--pink);
		}

		ul::before {
			content: '[';
		}

		ul::after {
			content: ']';
		}
	}

	i:hover,
	a:hover {
		color: var(--pink);
		text-decoration: none;
	}

	.nf-md-github {
		font-size: 1.15rem;
	}

	i,
	a {
		color: var(--fg);
	}

	i {
		font-size: 1rem;
	}

	.pink {
		color: var(--pink);
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}

	@media only screen and (max-width: 1200px) {
		nav {
			width: 90vw;
		}
	}
</style>
