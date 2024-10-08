export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    /* eslint-disable-next-line eqeqeq */
    if (this.constructor != Building && this.evacuationWarningMessage == undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') throw new TypeError('Sqft must be an integer');
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }
}
