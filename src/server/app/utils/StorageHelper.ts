const Storage = require('node-storage');

// this will synchronously create storage file and any necessary directories
// or just load an existing file
const store = new Storage('../storage/data.json');

module.exports = {

	cookies: {

		getItem: (key: string): any => {

			return store.get(key);

		},

		setItem: (key: string, value: any): void => {

			store.set(key, value);

		}

	}

}
