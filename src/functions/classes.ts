/**
 * ? Class Fileds
 */

{
    class Car {
        make: string;
        model: string;
        year: number;
        constructor(make: string, model: string, year: number){
            this.make = make;
            this.model  = model;
            this.year = year;
        }
    }
}
/**
 * ? Access Modifire Keywords
 *  * public    -> everyone (this is the default)
 *  * protected -> instance itself, and sublcass
 *  * private   -> only the instance itself
 *  * readonly  -> limit changes
 */
{
    function generateVinNumber():number{
        return 9;
    }
    function generateDoorLockCode() : string {
        return "code";
    }
    function unlockCar(car: Car, code: string){
        "blabla";
    }
    class Car {
        public readonly make: string;
        public readonly model: string;
        public readonly year: number;
        protected vinNumber = generateVinNumber();
        private doorLockCode = generateDoorLockCode();
        constructor(make: string, model: string, year: number){
            this.make = make;
            this.model = model;
            this. year = year;
        }
        protected unlockAllDoors(){
            unlockCar(this, this.doorLockCode);
        }
    }

    class Sedan extends Car {
        constructor(make: string, model: string, year: number){
            super(make, model, year);
            this.vinNumber;// can access
            //this.doorLockCode // cannot access
        }
        public unlock(){
            console.log("ucnagjadjdfjajfwajf");
            this.unlockAllDoors();
        }
    }
}
// less code
{
    class Car {
        constructor(
            public make: string, 
            public readonly model : string,
            public year: number
        ){}
    }
}