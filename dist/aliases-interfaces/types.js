/**
 *  ?Interfaces
 *  * It is a way of defining object type.
 *  * An object type can be thought of as "an instance of a class could conceivably look like this"
 *  * interface extends another interfaces
 *  * class implements the interfaces
 */
class Food {
}
function consumeFood(arg) { }
class Animal {
    eat(food) {
        consumeFood(food);
    }
}
class Dog extends Animal {
    bark() {
        return "woof";
    }
}
{
    function carForDog(dog) {
        dog.getBreed();
    }
}
{
    class Dog {
        bark() {
            return "woof";
        }
        eat(food) {
        }
    }
}
{
    class LivingOrganism {
        isAlive() {
            return true;
        }
    }
    class Dog extends LivingOrganism {
        bark() {
            return "woof";
        }
        eat(food) {
            consumeFood(food);
        }
    }
}
const val = [3, 3, [5, 6], 43, [324, [4], 34], 34];
export {};
