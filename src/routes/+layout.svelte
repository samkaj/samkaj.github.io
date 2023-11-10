<script lang="ts">
	import '../css/nav.scss';
	import '../css/main.scss';
	export const prerender = true;
	let themeClass = 'fa-moon';
	function toggleDarkMode() {
		const html = document.documentElement;
		if (themeClass === 'fa-moon') {
			themeClass = 'fa-sun';
			html.setAttribute('data-theme', 'light');
			return;
		}
		themeClass = 'fa-moon';
		html.setAttribute('data-theme', 'dark');
	}
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
				<i class={`fa-solid ${themeClass}`} />
			</button>
		</li>
	</ul>
</nav>
<slot />
