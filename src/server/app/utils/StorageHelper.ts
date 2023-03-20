const NodeStorage = require('node-storage');

// this will synchronously create storage file and any necessary directories
// or just load an existing file
const store:any = new NodeStorage('../storage/data.json');

const getItem:Function = (key: string) => {

	return store.get(key);

}

const setItem:Function = (key:string, value: any) => {

	store.set(key, value);

}

export {store, setItem, getItem}
