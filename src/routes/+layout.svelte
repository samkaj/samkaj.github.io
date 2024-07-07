<script lang="ts">
	import { onMount } from 'svelte';
	import '../css/nav.scss';
	import '../css/main.scss';
	import { themeStore } from '../stores/store';

	// Dunno if we want light mode
	function toggleDarkMode() {
		const newMode = $themeStore === 'dark' ? 'light' : 'dark';
		$themeStore = newMode;
		document.documentElement.setAttribute('data-theme', newMode);
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		$themeStore = savedTheme;
		document.documentElement.setAttribute('data-theme', savedTheme);
	});
</script>

<nav>
	<h3>
		<span class="pink">{'</> '}</span>samkaj
	</h3>
	<ul>
		<li>
			<a href="https://linkedin.com/in/samuel-kajava"><i class="fa-brands fa-linkedin-in" /></a>
		</li>
		<li class="pink">,</li>
		<li><a href="https://github.com/samkaj"><i class="fa-brands fa-github" /></a></li>
		<li class="pink">,</li>
		<li><a href="mailto:samuelkajava@proton.me">@</a></li>
	</ul>
</nav>

<main>
	<slot />
</main>

<style lang="scss">
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
	}

	i,
	a {
		color: var(--fg);
	}

	.pink {
		color: var(--pink);
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}

	@media only screen and (max-width: 600px) {
		nav {
			width: 90vw;
		}
	}
</style>
