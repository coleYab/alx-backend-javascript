import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    this.range = this._range;
    return new Car();
  }
}
