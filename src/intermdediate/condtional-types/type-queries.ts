/**
 * ? Keyof
 *  * The keyof type query allows us to obtain type representing all property keys on a given interface
 *
 */

{
  type DatePropertyNames = keyof Date;
  // to find only string keys
  type DateStringPropertyNames = DatePropertyNames & string 
}
{
    interface Person {
        name: string;
        age: number;
        address: string;
        0: string;
      }
      
      type PersonKey = keyof Person;
      // PersonKey is 'name' | 'age' | 'address'
    type personKeyString = PersonKey & string;    
    type personKeyNumber = PersonKey & number;
}

/**
 * ? typeof 
 *  * The typeof operator is used to obtain the type of a value, variable, or expression. It is often used with values or instances to capture their types.
 * 
 */

{
    async function main() {
        const apiResponse = await Promise.all([
          fetch("https://example.com"),
          Promise.resolve("Titanium White"),
        ])
       
        type ApiResponseType = typeof apiResponse
                   
      }
}
