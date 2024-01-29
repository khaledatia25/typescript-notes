interface Car {
  name: string;
  model: string;
  year: number;
  make: string;
  color: {
    red: number;
    greed: number;
    blue: number;
  };
}

let color: Car["color"];

let red: Car["color"]["red"];

let someVariable: Car["color" | "year"];
