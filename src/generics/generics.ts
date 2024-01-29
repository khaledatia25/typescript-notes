/**
 * ? Generics
 *  * Allow us to parameterize types, which unlock great opportunity to reuse types
 */

{
  function lsitToDict<T>(
    list: T[],
    idGen: (arg: T) => string
  ): { [k: string]: T } {
    const dict: { [k: string]: T } = {};
    list.forEach((element) => {
      const key = idGen(element);
      dict[key] = element;
    });
    return dict;
  }
}
{
  function wrapInArray<T>(arg: T): [T] {
    return [arg];
  }
}
