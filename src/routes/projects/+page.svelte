<script lang="ts">
	import Project from '../../components/project.svelte';
</script>

<h1>personal projects</h1>
<div>
	<Project
		heading={'ftp client'}
		description={'FTP client written in C++, implemented as a CLI.'}
		src={'ftp.png'}
		alt={'code snippet of ftp client'}
		keywords={['FTP', 'C++', 'CLI']}
		github={'https://github.com/samkaj/ftp'}
		date={'dec 2023'}
	/>
	<Project
		heading={'apskrift.com'}
		description={'Typing practice tool, write fast get high scores.'}
		src={'apskrift.png'}
		alt={'the apskrift website'}
		keywords={['Typing', 'TypeScript', 'Vanilla']}
		github={'https://github.com/samkaj/apskrift'}
		date={'nov 2023'}
	/>
	<Project
		heading={'nadja'}
		description={"Playlist generator using Spotify's API."}
		src={'nadja.png'}
		alt={'the nadja webapp'}
		keywords={['Spotify', 'TypeScript', 'React']}
		github={'https://github.com/samkaj/nadja'}
		date={'apr 2023'}
	/>
    <Project
    	heading={'lakrits.nvim'}
    	description={'Colorscheme for Neovim, written in Lua.'}
    	src={'https://raw.githubusercontent.com/samkaj/lakrits.nvim/main/assets/theme.png'}
    	alt={'screenshot of colorscheme written in lua'}
    	keywords={['Colorscheme', 'Vim', 'Editor']}
    	github={'https://github.com/samkaj/lakrits.nvim'}
    	date={'nov 2023'}
    />
</div>
<h1>school projects</h1>
<div>
<Project
	heading={'static http server'}
	description={'HTTP server written in Go with optional Proxy implementation.'}
	keywords={['Golang', 'School']}
	github={'https://github.com/samkaj/tda596-http'}
	date={'oct 2023'}
/>
<Project
	heading={'shed'}
	description={'JavaFX application for browsing Systembolaget\'s products.'}
	keywords={['Java', 'School', 'Agile']}
	github={'https://github.com/emilsvennesson/shed'}
	date={'oct 2021'}
/>
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-top: 1em;
		grid-gap: 2em;
	}

	h1 {
        font-size: 2.5em;
		margin-bottom: 0.5em;
        border-bottom: 0.5px solid var(--fg-lighter);
	}

	@media only screen and (max-width: 600px) {
		div {
			grid-template-columns: 1fr;
            margin-top: 2em;
		}
        h1 {
            display: none;
        }
	}
</style>
