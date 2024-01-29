/**
 * ?type aliases
 *  * define a more meaningful name for this type
 *  * declare the paritulars of the type in a single place
 *  * import and export this type from modules, the same as if it were an exported value
 */
export type UserContactInfo = {
    name: string;
    email: string;
}

type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = ["success", UserContactInfo];

export type UserInfoOutcome = 
    | UserInfoOutcomeError 
    | UserInfoOutcomeSuccess;

export type SpecialDate = Date & {getReason(): string};


/**
 *  ?Interfaces
 *  * It is a way of defining object type.
 *  * An object type can be thought of as "an instance of a class could conceivably look like this"
 *  * interface extends another interfaces
 *  * class implements the interfaces
 */
class Food {

}
function consumeFood(arg : Food){}
class Animal {
    eat(food : Food){
        consumeFood(food);
    }
}
class Dog extends Animal {
    bark(){
        return "woof";
    }
} 

{
    interface Animal {
        isAlive(): boolean;
    }
    interface Mammal extends Animal {
        getFurOrHairColor() : string;
    }
    interface Dog extends Mammal {
        getBreed(): string;
    }
    function carForDog(dog: Dog){
        dog.getBreed();
    }
}

{
    interface AnimalLike {
        eat(food: Food): void;
    }
    class Dog implements AnimalLike {
        bark(){
            return "woof";
        }
        eat(food: Food){

        }
    }
}

{
    class LivingOrganism {
        isAlive() {
          return true
        }
      }
      interface AnimalLike {
        eat(food:Food): void
      }
      interface CanBark {
        bark(): string
      }
       
      class Dog
        extends LivingOrganism
        implements AnimalLike, CanBark
      {
        bark() {
          return "woof"
        }
        eat(food:Food) {
          consumeFood(food)
        }
      }
}

/**
 * ? Recursive Types
 * 
 */

type NestedNumbers = number | NestedNumbers[];

const val : NestedNumbers = [3, 3, [5, 6], 43, [324 , [4], 34], 34];