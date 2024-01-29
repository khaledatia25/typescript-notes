/**
 * ? Built-in Type Guards
 */

{
  let value:
    | Date
    | null
    | undefined
    | "pineapple"
    | [number]
    | { dateRange: [Date, Date] };

  // instanceof
  if (value instanceof Date) {
    value;
    // ^?
  }
  // typeof
  else if (typeof value === "string") {
    value;
    // ^?
  }
  // Specific value check
  else if (value === null) {
    value;
    // ^?
  }
  // Truthy/falsy check
  else if (!value) {
    value;
    // ^?
  }
  // Some built-in functions
  else if (Array.isArray(value)) {
    value;
    // ^?
  }
  // Property presence check
  else if ("dateRange" in value) {
    value;
    // ^?
  } else {
    value;
    // ^?
  }
}

/**
 * ? User Defined Type Guards
 */

{
  interface CarLike {
    make: string;
    model: string;
    year: string;
  }
  let maybeCar: unknown;

  // the quard
  function isCarLike(valueToCheck: any): valueToCheck is CarLike {
    return (
      valueToCheck &&
      typeof valueToCheck === "object" &&
      "make" in valueToCheck &&
      typeof valueToCheck["make"] === "string" &&
      "model" in valueToCheck &&
      typeof valueToCheck["model"] === "string" &&
      "year" in valueToCheck &&
      typeof valueToCheck["year"] === "number"
    );
  }
  if (isCarLike(maybeCar)) {
    maybeCar;
  } else {
    maybeCar;
  }
}
