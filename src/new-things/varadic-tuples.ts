// Tuples
enum Sandwich {
  Hamburger,
  VeggiBurger,
  GrilledCheese,
  BLT,
}
type SandwichOrder = [number, Sandwich, ...string[]];
const order1: SandwichOrder = [13.039, Sandwich.Hamburger, "lettuce"];
const order2: SandwichOrder = [
  15.039,
  Sandwich.Hamburger,
  "lettuce",
  "avocado",
];

type MyTuple<T> = [number, ...T[]];
function tail<T extends any[]>(arg: readonly [number, ...T]) {
  const [_ignored, ...rest] = arg;
  return rest;
}
const result = tail(order1);