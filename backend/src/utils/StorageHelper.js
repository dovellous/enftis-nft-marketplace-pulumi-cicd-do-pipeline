const NodeStorage = require('node-storage');

// this will synchronously create storage file and any necessary directories
// or just load an existing file
const store = new NodeStorage('../storage/data.json');

const getItem = (key) => {

	return store.get(key);

}

const setItem = (key, value) => {

	store.set(key, value);

}

module.exports = {store, setItem, getItem}
