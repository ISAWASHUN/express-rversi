export class Point {
  constructor(public _x: number, public _y: number) {}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}