{
  interface TwoNubmerCalc {
    (x: number, y: number): number;
  }
  const add: TwoNubmerCalc = (a, b) => a + b;
}
{
  type TwoNubmerCalc = (x: number, y: number) => number;
  const add: TwoNubmerCalc = (a, b) => a + b;
}
{
  function invoke1(callback: () => undefined) {
    setTimeout(callback, 4000);
  }
  function invoke2(callback: () => void) {
    setTimeout(callback, 4000);
  }
  const values: number[] = [];
  // invoke1(()=>values.push(4)); // makes an error as array.push() returns a number

  invoke2(() => values.push(327509));
}

/**
 * ? construct signatures
 * * They are similar to call signatures, except they descirbe what should happen with the "new" keyword.
 */
{
  interface DateConstructor {
    new (value: number): Date;
  }
  let MyDateConsturctor: DateConstructor = Date;
  const d = new MyDateConsturctor(43);
}

/**
 * ? Function overloads
 *  *
 */
{
  type FormSubmitHandler = (data: FormData) => void;
  type MessageHandler = (evt: MessageEvent) => void;

  function handleMainEvent(
    elem: HTMLFormElement,
    handler: FormSubmitHandler
  ): void;
  function handleMainEvent(
    elem: HTMLIFrameElement,
    handler: MessageHandler
  ): void;
  function handleMainEvent(
    elem: HTMLFormElement | HTMLIFrameElement,
    handler: FormSubmitHandler | MessageHandler
  ): void {}
}

/**
 * ? This types
 *  * Sometimes we have a free-standing function that has a strong opinion around what "this" will end up being
 *  * at the time is invoked
 */
{
  function myClickHanlder(event: Event) {
    //this.disabled = true;
    // ? this will have the type any because it doesn't have a type annotation
    // ? this will cause problem
  }
  function updateClickHandle(this: HTMLButtonElement, event: Event) {
    this.disabled = true;
    // ? there is no error as we annotated the type of "this"
  }
}
