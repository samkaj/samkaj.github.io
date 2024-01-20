<script lang="ts">
	const emailAccessKey = '6b335863-f977-4adf-a1f8-d4d7ee10fc2e';
	export let status = '';
	async function handleSubmit(e: SubmitEvent) {
		status = 'Sending...';
		const form = e.target as HTMLFormElement;
		const data = new FormData(form);
		const json = JSON.stringify(Object.fromEntries(data.entries()));

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});

		const result = await response.json();
		if (result.success) {
			status = 'Your message has been sent!';
			form.reset();
			return;
		}
		status = 'Something went wrong!';
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="hidden" name="access_key" value={emailAccessKey} />
	<label for="name">Name</label>
	<input type="text" name="name" required />
	<label for="email">Email</label>
	<input type="email" name="email" required />
	<label for="message">Message</label>
	<textarea name="message" required rows="4" />
	<button type="submit">Get in touch</button>
</form>

<p>{status}</p>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1em;
		border-bottom: solid 1px var(--border);
		max-width: 600px;
		gap: 0.3em;
	}

	input,
	textarea {
		padding: 0.7em 0.7em;
		border: solid 1px var(--border);
		background-color: var(--bg);
		border-radius: 5px;
		font-size: 1em;
		font-family: 'Titillum Web', sans-serif;
	}

	button {
		border: none;
		background-color: var(--fg);
		color: var(--bg);
		padding: 0.6em;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 1em;
		margin-left: auto;
		font-family: 'Titillum Web', sans-serif;
		font-size: 0.9em;

		&:hover {
			opacity: 0.9;
		}
	}

	input:focus,
	textarea:focus {
		outline-color: var(--secondary);
	}

	textarea {
		resize: none;
	}

	@media only screen and (max-width: 600px) {
		form {
			margin: auto;
			padding: 1em 0;
		}
	}
</style>
