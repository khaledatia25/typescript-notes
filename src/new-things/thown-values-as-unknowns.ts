try {
  //blla
} catch (err: unknown) {
  if (err instanceof Error) throw err;
  else throw new Error(`${err}`);
}
