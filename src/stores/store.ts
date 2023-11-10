import { writable, type Writable } from 'svelte/store';

const isBrowser = typeof Storage !== 'undefined';

function localStorageStore(key: string, defaultValue: string = ''): Writable<string> {
	const { subscribe, set, update } = writable<string>(defaultValue);
	if (isBrowser) {
		const storedValue = localStorage.getItem(key);
		if (storedValue !== null) {
			set(storedValue);
			typeof localStorage !== 'undefined';
		}
	}

	function setAndPersist(value: string) {
		set(value);
		if (!isBrowser) {
			return;
		}

		localStorage.setItem(key, value);
	}

	return {
		subscribe,
		set: (value) => setAndPersist(value),
		update
	};
}

export const themeStore = localStorageStore('theme', 'light');
