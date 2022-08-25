import thing_model from './stuff';
import { Thing } from './thing.class';

export const Stuff_App = class extends EventTarget {
  constructor(localStorageKey) {
    super();
    this.localStorageKey = localStorageKey;
    this.collection = [];
    // window.addEventListener(
    //   'storage',
    //   () => {
    //     this._readStorage();
    //     this._save();
    //   },
    //   false
    // );
    this.get = (id) => this.collection.find((thing) => thing.id === id);
  }

  addThing(name) {
    let thing = new Thing(name?.toUpperCase());
    this.id = `id_${Date.now}`;

    const tempArr = [];
    tempArr.push(thing);
    this.collection.push(thing)

    // window.localStorage.setItem(
    //   this.localStorageKey,
    //   JSON.stringify(this.collection)
    // );

    //this._save();
  }

  _readStorage() {
    this.collection = JSON.parse(
      window.localStorage.getItem(this.localStorageKey) || '[]'
    );
  }
  _clearStorage(lsk) {
    this.collection = [];
    window.localStorage.removeItem(lsk);
  }
  _save() {
    window.localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.collection)
    );

    console.log(window.localStorage.getItem(this.localStorageKey));

    this.dispatchEvent(new CustomEvent('save'));
  }
  lockValue(key) {
    // ability to lock an input value if multiple items of that key type are being added
  }
  remove({ id }) {
    this.collection = this.collection.filter((thing) => thing.id !== id);
    //this._save();
  }

  // retrieve todo - (id)

  // update todo

  // delete todo
};
