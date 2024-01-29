/**
 * ? Types describes a set of things that you can find in the variable of that type
 */

/**
 * ? Top Types
 *  * Is a type that descibes anything
 *  * Any possible value allowed by the system
 *  * { x | x could be anything }
 *  * in typescript these types are "any" and "unknown"
 *  * difference between "any" and "unknown" is that "unkown" must be used with type gaurds
 */


/**
 * ? Bottom Types
 *  * A bottom type is a type that descibes "no possible value allowed by the system"
 *  * To use our set theory mental model we could descibe this as any value from this set {}
 * ? Exhaustive conditional
 */
{
    class Car{
        drive(){
            
        }
    }
    class Truck {
        tow(){

        }
    }
    type Vehicle = Truck | Car;
    function obtainRandomVehicle() : Vehicle{
        if(Math.random() > .5)return new Car();
        else return new Truck();
    }
    let myVehicle: Vehicle = obtainRandomVehicle();
    // The exhaustive conditional
    if(myVehicle instanceof Truck){
        myVehicle.tow();
    }else if(myVehicle instanceof Car){
        myVehicle.drive();
    }else {
        const neverValue : never = myVehicle;
    }
}