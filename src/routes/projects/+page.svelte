<script lang="ts">
	import Project from '../../components/project.svelte';
</script>

<main>
	<Project
		heading={'lakrits.nvim'}
		description={'Colorscheme for Neovim, written in Lua.'}
		src={'https://raw.githubusercontent.com/samkaj/lakrits.nvim/main/assets/theme.png'}
		alt={'screenshot of colorscheme written in lua'}
		keywords={['Colorscheme', 'Vim', 'Editor']}
		github={'https://github.com/samkaj/lakrits.nvim'}
	/>
	<Project
		heading={'apskrift.com'}
		description={'Typing practice tool, write fast get high scores.'}
		src={'apskrift.png'}
		alt={'the apskrift website'}
		keywords={['Typing practice', 'TypeScript', 'Vanilla']}
		github={'https://github.com/samkaj/apskrift'}
	/>
</main>

<style lang="scss">
	main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 1em;
	}
</style>
