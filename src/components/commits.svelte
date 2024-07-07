<script lang="ts">
	const token = import.meta.env.VITE_GITHUB_AUTH;
	const user = 'samkaj';
	type Commit = {
		date: Date;
	};

	async function getRepos(): Promise<string[]> {
		const req = await fetch(`https://api.github.com/users/${user}/repos?per_page=25&sort=pushed`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/vnd.github+json',
				'X-GitHub-Api-Version': '2022-11-28'
			}
		})
			.then((res) => res.json())
			.catch(() => []);

		const repos = req.map((repo: any) => repo.name);
		return repos;
	}

	async function getCommits(repo: string): Promise<Commit[]> {
		const lastYear = new Date();
		lastYear.setFullYear(lastYear.getFullYear() - 1);
		const since = lastYear.toISOString();
		const req = await fetch(`https://api.github.com/repos/${user}/${repo}/commits?since=${since}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/vnd.github+json',
				'X-GitHub-Api-Version': '2022-11-28'
			}
		})
			.then((res) => res.json())
			.catch((err) => {
				console.error(err);
				return [];
			});

		const commits: Array<Commit> = req.map((commit: any) => {
			const d = Date.parse(commit.commit.author.date);
			const c = { date: new Date(d) };
			return c;
		});

		return commits;
	}

	async function getAllCommits(repos: string[]): Promise<Commit[]> {
		let commits: Commit[] = [];
		for (const repo of repos) {
			const c = await getCommits(repo)
				.then((c) => c)
				.catch(() => []);
			commits = commits.concat(c);
		}

		return commits;
	}

	async function getCommitsForUser(): Promise<Commit[]> {
		const repos = await getRepos()
			.then((r) => r)
			.catch(() => []);

		if (repos.length === 0) {
			return [];
		}

		const commits = await getAllCommits(repos)
			.then((c) => c)
			.catch((err) => {
				console.error(err);
				return [];
			});

		console.log(commits);
		return commits;
	}

	/*
	TODO:
		- Store the commits in a hash map with the date as the key
		- Sort the commits by date
		- Create a timeline component
		- Display the commits in the timeline
		- Store the timeline in a store to avoid re-fetching
			- Save the store date, and if it's older than a week, re-fetch
	*/
</script>

<button on:click={async () => await getCommitsForUser()}>Click me</button>
