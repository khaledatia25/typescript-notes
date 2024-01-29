{
  type Fruit = {
    name: string;
    color: string;
    mass: string;
  };

  type Dict<T> = { [k: string]: T };

  const fruitCatalog: Dict<Fruit> = {};
}

{
  type Fruit = {
    name: string;
    color: string;
    mass: string;
  };
  type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit };
}

{
  type MyRecord<KeyType extends string, ValueType> = {
    [Key in KeyType]: ValueType;
  };

  /**
   * There is a built-in typescript type, which matches this pretty much exactly
   */
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
}
/**
 * ? Use with indexed access types
 */
{
  type PartOfWindow = {
    [Key in "document" | "navigator" | "setTimeout"]: Window[Key];
  };
}

{
  type PickWindowProperties<Keys extends keyof Window> = {
    [Key in Keys]: Window[Key];
  };

  type PartOfWindow = PickWindowProperties<
    "document" | "navigator" | "setTimeout"
  >;
}

{
  type PickProtperties<ValueType, Keys extends keyof ValueType> = {
    [Key in Keys]: ValueType[Key];
  };
  type PartOfWindow = PickProtperties<
    Window,
    "document" | "navigator" | "setTimeout"
  >;
  /**
   * ? typescript has this built in it
   *  pick<T, keys>
   */
}

{
  /**
   * Make all properties in T optional
   */
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
  /**
   * Make all properties in T required
   */
  type Required<T> = {
    [P in keyof T]-?: T[P];
  };
  /**
   * Make all properties in T readonly
   */
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
}

/**
 * ? Template literal Types
 */
{
  type ArtFeatures = "cabin" | "tree" | "sunset";
  type Colors = "darkSienna" | "sapGree" | "titaniumWhite" | "prussianBlue";
  type ArtMethodNames = `paint_${Colors}_${ArtFeatures}`;
  type CammelCaseArtMethodNames =
    `paint${Capitalize<Colors>}${Capitalize<ArtFeatures>}`;
}

{
  interface DataState {
    digits: number[];
    names: string[];
    flags: Record<"darkMode" | "mobile", boolean>;
  }

  let dataState: DataState;

  type DataSDK = {
    [k in keyof DataState as `set${Capitalize<k>}`]: (
      arg: DataState[k]
    ) => void;
  };
}

/**
 * ? Filtering Properties out
 */

{
  type DocKeys = Extract<keyof Document, `query${string}`>;
  type KeyFilteredDoc = {
    [K in DocKeys]: Document[K];
  };
}
