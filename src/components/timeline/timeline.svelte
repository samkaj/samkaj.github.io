<script lang="ts">
	import Header from '../header.svelte';
	import type { Item } from './timeline';
	import TimelineItem from './timeline_item.svelte';

	const createItem = (company: String, position: String, dateStart: String): Item => {
		return { company, position, dateStart };
	};

	let items: Item[] = [
		createItem('Cytiva', 'Devenv in Golang and framework developer in C#', 'Summer 2022'),
		createItem(
			'Ericsson',
			'Software intern improving integration testing in Golang',
			'Summer 2023'
		),
		createItem('Ericsson', 'Software intern rewriting systems in Rust', 'Fall 2023 - Fall 2024'),
		createItem(
			'Chalmers (MSc.)',
			'Civilingenjör. BSc in software engineering. MSc in computer science (language-based security)',
			'Fall 2020 - Jan 2025'
		),
		createItem('PhD Student', 'PhD student in language-based security', 'Spring 2025 - ')
	];
</script>

<div class="timeline">
	<Header accent="yellow" text="experience" />
	<div class="separator" />
	<ul>
		{#each items as item}
			<li>
				<TimelineItem {item} />
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.timeline {
		width: 100%;
		grid-area: timeline;
	}

	.separator {
		display: block;
		width: 100%;
		border-bottom: 2px dashed var(--black2);
		margin-bottom: -1.2em;
		margin-top: 1em;
	}

	ul {
		display: flex;
		align-content: space-evenly;
		float: left;
		width: 100%;
		list-style: none;
		padding: 0;
	}

	@media only screen and (max-width: 1200px) {
		.separator {
			display: none;
		}

		ul {
			margin-top: -0.5em;
			border-left: 2px dashed var(--black2);
			flex-direction: column;
		}
	}
</style>
