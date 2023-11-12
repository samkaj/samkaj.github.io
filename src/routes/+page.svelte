<main>
	<article>
		<h1>Software developer<br />Samuel Kajava</h1>
		<p>I'm a software developer and masters student living in Gothenburg, Sweden.</p>
		<p>
			I study <a
				class="bold pink"
				href="https://www.chalmers.se/en/education/find-masters-programme/computer-systems-and-networks-msc/"
				>Computer Systems and Networks</a
			>
			at Chalmers and write software at <span class="bold purple">Ericsson</span>.
		</p>
		<p>
			I like to write maintainable code in fun languages while hacking around in <span
				class="bold">Vim</span
            > and <span class="bold">Linux</span>. My current focus is on writing performant distributed systems and learning as much
			as possible.
		</p>
	</article>
	<aside />
</main>

<style lang="scss">
	main {
		display: flex;
		align-items: center;
		flex-direction: row;
		margin: auto;
		width: 80vw;
		height: 70vh;
	}

	article {
		display: block;
		width: 50%;
	}

	aside {
		height: 100%;
		background-color: var(--fg);
	}

	h1 {
		font-size: 2em;
		display: block;
		line-height: 1em;
	}

	h1::after {
		display: block;
		width: 28%;
		margin-top: 1em;
		content: '';
		border-bottom: 3px solid var(--primary);
	}

	p {
		font-size: 1.2em;
		color: var(--fg-lighter);
		font-weight: 300;
	}

	.pink {
		color: var(--primary);
	}

	.pink:hover {
		text-decoration: underline;
	}

    .purple {
        color: var(--secondary);
    }
</style>
