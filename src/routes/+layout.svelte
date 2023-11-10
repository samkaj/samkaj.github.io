<script lang="ts">
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
	<ul>
		<li id="home-logo"><a href="/">samkaj</a></li>
	</ul>

	<ul id="mid">
		<li><a href="#">Projects</a></li>
		<li><a href="#">Experience</a></li>
		<li><a href="#">Contact</a></li>
	</ul>

	<ul id="right">
		<li><a href="https://github.com/samkaj"><i class="fa-brands fa-github" /></a></li>
		<li><a href="https://linkedin.com/samuel-kajava"><i class="fa-brands fa-linkedin-in" /></a></li>
		<li>
			<button on:click={toggleDarkMode}>
				<i class={`fa-solid ${icon}`} />
			</button>
		</li>
	</ul>
</nav>
<slot />
