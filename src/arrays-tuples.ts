{
    const fileEx : string[] = ["js", "ts"];
    const cars : {
        make: string;
        model: string;
        year: number;
    }[] = [{
        make: "make",
        model:"model",
        year: 10
    }];
}
// tuples
{
    let myCar : [number, string, string] = [30,"kd", "kdah"];
    const numPair : [number,number] = [4, 5];
    numPair.push(43);
    numPair.pop();
    numPair.pop();
    numPair.pop();
}