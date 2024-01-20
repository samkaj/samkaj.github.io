<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import '../css/nav.scss';
	import '../css/main.scss';
	import { themeStore } from '../stores/store';
	let icon = 'fa-sun';

	function toggleDarkMode() {
		const newMode = $themeStore === 'dark' ? 'light' : 'dark';
		icon = newMode === 'dark' ? 'fa-moon' : 'fa-sun';
		$themeStore = newMode;
		document.documentElement.setAttribute('data-theme', newMode);
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		icon = savedTheme === 'dark' ? 'fa-moon' : 'fa-sun';
		$themeStore = savedTheme;
		document.documentElement.setAttribute('data-theme', savedTheme);
	});
</script>

<nav>
	<ul id="left">
		<li><a id="home-logo" href="{base}/">samkaj</a></li>
		<li><a href="{base}/projects">Projects</a></li>
		<li><a href="{base}/about">About</a></li>
	</ul>
	<ul id="right">
		<li>
			<a href="https://linkedin.com/in/samuel-kajava"><i class="fa-brands fa-linkedin-in" /></a>
		</li>
		<li><a href="https://github.com/samkaj"><i class="fa-brands fa-github" /></a></li>
		<li>
			<button on:click={toggleDarkMode}>
				<i class="fa-solid fa-circle-half-stroke" />
			</button>
		</li>
	</ul>
</nav>
<div class="wrapper">
	<slot />
</div>

<style lang="scss">
	nav {
		height: 3em;
	}

	.wrapper {
		width: 80vw;
		margin: auto;
	}
</style>
