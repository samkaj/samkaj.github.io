<script lang="ts">
	import { onMount } from 'svelte';
	import '../css/nav.scss';
	import '../css/main.scss';
	import { themeStore } from '../stores/store';

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
</nav>
<main>
</main>

<style lang="scss">
</style>
