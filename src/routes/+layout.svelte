<script lang="ts">
    import "../css/nav.scss"
    import "../css/main.scss"
	export const prerender = true;
</script>

<nav>
	<ul>
		<li>samkaj</li>
	</ul>

	<ul id="mid">
		<li><a href="#">Projects</a></li>
		<li><a href="#">Experience</a></li>
		<li><a href="#">Contact</a></li>
	</ul>

	<ul id="right">
		<li><a href="https://github.com/samkaj">GitHub</a></li>
		<li><a href="https://linkedin.com/samuel-kajava">LinkedIn</a></li>
		<li>Toggle dark/light</li>
	</ul>
</nav>
<slot />
