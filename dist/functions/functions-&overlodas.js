"use strict";
{
    const add = (a, b) => a + b;
}
{
    const add = (a, b) => a + b;
}
{
    function invoke1(callback) {
        setTimeout(callback, 4000);
    }
    function invoke2(callback) {
        setTimeout(callback, 4000);
    }
    const values = [];
    // invoke1(()=>values.push(4)); // makes an error as array.push() returns a number
    invoke2(() => values.push(327509));
}
