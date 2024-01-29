{
    let car : {
        make: string;
        model: string;
        year: number;
    };
}

// Optional Properties
{

    function printCar(car: {
        make: string;
        model : string ;
        year: number;
        chargeVoltage?: number;       
    }){
        let str: string = `${car.make} ${car.model} (${car.year})`;
        car.chargeVoltage;
        if(typeof car.chargeVoltage !== "undefined")
            str += `// ${car.chargeVoltage.toFixed(2)}`;

        console.log(str);
    }
    printCar({
        make: "BMW", 
        model: "car",
        year: 2020
    });
    printCar({
        make: "BMW", 
        model: "car",
        year: 2020,
        chargeVoltage: 202
    });
}

{
    const phones : {
        [k: string]:{
            countryL:string;
            area: string;
            number: string;
        } | undefined
    }  = {}
}