export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') throw new TypeError('Size must be a number');
    this._size = newSize;
  }

  get size() {
    return this._size;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') throw new TypeError('Location must be a string');
    this._location = newLocation;
  }

  get location() {
    return this._location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
