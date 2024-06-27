<script lang="ts">
	import { text } from '@sveltejs/kit';
	import Header from '../header.svelte';
	import type { Item } from './timeline';
	import TimelineItem from './timeline_item.svelte';

	const createItem = (company: String, position: String, dateStart: String): Item => {
		return { company, position, dateStart };
	};

	let items: Item[] = [
		createItem('Chalmers', 'Software Engineering', 'Fall 2020'),
		createItem('Cytiva', 'Devenv in Golang and framework developer in C#', 'Summer 2022'),
		createItem(
			'Chalmers (BSc.)',
			'Graduate with thesis based with research in performance benchmarking as a CI tool',
			'Summer 2023'
		),
		createItem(
			'Ericsson',
			'Software intern improving integration testing in Golang',
			'Summer 2023'
		),
		createItem('Chalmers', 'Computer Systems & Networks', 'Fall 2023'),
		createItem(
			'Ericsson',
			'Software intern working rewriting systems in Rust',
			'Fall 2023 - Fall 2024'
		),
		createItem(
			'Chalmers (MSc.)',
			"Master's thesis work in language-based security",
			'Fall 2024 - Jan 2025'
		)
	];
</script>

<div class="timeline">
	<Header accent="green" text="experience" />
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
	}

	ul {
		display: flex;
		align-content: space-evenly;
		float: left;
		width: 100%;
		list-style: none;
		padding: 0;
	}

	@media only screen and (max-width: 600px) {
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
