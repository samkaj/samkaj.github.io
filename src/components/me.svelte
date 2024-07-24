<aside>
	<img src="/me.jpg" alt="Me in glasses" />
</aside>

<style lang="scss">
	aside {
		grid-area: me;
		margin-top: 1.2em;

		img {
			width: 100%;
			display: block;
			border-radius: 10px;
			border: 2px solid var(--black2);
			margin: auto;
			float: left;
		}

		@media only screen and (max-width: 1200px) {
			img {
				width: 50%;
				margin: auto;
				float: none;
				border-radius: 100%;
			}
		}
	}
</style>
