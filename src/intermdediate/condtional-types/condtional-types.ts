/**
 * ? Condtional Types
 *  * Condtional Types allow for types to be expressed using a very similar (basically, the same) syntax
 *  * syntax of ternary operator
 */

{
  class Grill {
    startGas() {}
    stopGas() {}
  }
  class Oven {
    setTemperature(degrees: number) {}
  }

  type CookingDevice<T> = T extends "grill" ? Grill : Oven;
  let device1: CookingDevice<"grill">;

  let device2: CookingDevice<"oven">;
}
