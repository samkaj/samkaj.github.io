<script lang="ts">
	import Experience from '../../components/experience.svelte';
</script>

<h1>experience</h1>
<p class="sub">
	Here you'll find some of my work experience. If you want to see more, check out my <a
		href="https://linkedin.com/in/samuel-kajava">LinkedIn</a
	>.
</p>

<ul>
	<Experience
		role={'Software Intern'}
		description={'Developed integration tests in Golang and currently working on features in C++.'}
		period={'8 months'}
		year={'Today'}
		company={'@Ericsson'}
	/>
	<Experience
		role={'Summer Intern'}
		description={'Improved the work experience for the DevOps team by developing an Azure agent in Golang for resource monitoring in Graphana and Prometheus. Contributed to inhouse testing framework for automated testing in C#. Improved quality assurance by performing manual software tests.'}
		period={'3 months'}
		year={'2022'}
		company={'@Cytiva'}
	/>
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

	a {
		color: var(--secondary);
	}

	.sub {
		border-bottom: solid 1px var(--border);
		padding-bottom: 1em;
		margin-bottom: 1em;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			display: none;
		}
		p {
			padding: 3em 0 1em 0;
			border-bottom: solid 1px var(--border);
		}
	}
</style>
