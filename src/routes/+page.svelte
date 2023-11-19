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
			at Chalmers and write software at <span class="bold">Ericsson</span>.
		</p>
		<p>
			I like to write maintainable code in fun languages while hacking around in <span class="bold"
				>Vim</span
			>
			on <span class="bold">Linux</span> or <span class="bold">MacOS</span>. My current focus is on
			writing performant distributed systems and learning as much as possible.
		</p>
	</article>
	<aside>
		<img src="laptop.png" alt="laptop" />
	</aside>
</main>

<style lang="scss">
	main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin: auto;
		height: 70vh;
		min-height: 700px;
	}

	article {
		display: block;
		width: 50%;
	}

	aside {
		display: flex;
		flex-direction: row;
		justify-content: end;
		width: 50%;
		img {
			width: 80%;
			margin-left: 20%;
		}
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

	@media only screen and (max-width: 600px) {
		main {
            height: 50vh;
            max-height: 50vh;
			flex-direction: column;
			justify-content: center;
			justify-items: left;
			* {
				margin: auto;
			}
		}

		article {
			width: 100%;
		}

		p {
			margin-bottom: 0.5em;
		}

        aside,
		img {
			display: none;
		}

		h1::after {
			display: block;
			width: 28%;
			margin-top: 0.5em;
			content: '';
			border-bottom: 3px solid var(--primary);
			margin-bottom: 0.5em;
		}
	}
</style>
