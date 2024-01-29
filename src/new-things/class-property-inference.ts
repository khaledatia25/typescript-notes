/**
 * This major convenience feature reduces the need for the class field type annotation
 * by inferring their types from assignment in the constructor.
 * It's important to rememver that this only works when noImplicityAny is set to true
 */

class Color {
  red;
  green;
  blue;
  constructor(c: [number, number, number]) {
    this.red = c[0];
    this.green = c[1];
    this.blue = c[2];
  }
}
