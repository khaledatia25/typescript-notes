"use strict";
/**
 * !Union Types in TypeScript
 *  ?Union types in TypeScript can be described using the | (pipe) operator.
 */
{
    function flipCoin() {
        if (Math.random() > 0.5)
            return "head";
        else
            return "tail";
    }
    const outcome = flipCoin();
    /**
     *  ? With tuples
     *  *we will make the first index [0] -> either "success" or "error"
     *  *[1] -> depends on the value in [0]
     *      -> "success" -> {name: string; email: string;}
     *      -> "error" -> Error
     */
    function GetUserInfo() {
        if (flipCoin() === "head") {
            return [
                "success",
                {
                    name: "khaled",
                    email: "khaled$khaled.khaled"
                }
            ];
        }
        else {
            return [
                "error",
                new Error()
            ];
        }
    }
    const outcome1 = GetUserInfo();
    if (outcome1[0] === "error") {
        outcome1;
    }
    else {
        outcome1;
    }
}
/**
 * !Intersection Types in TypeScript
 *  ?Intersection types in TypeScript can be described using the & (ampersand) operator.
 */
{
    const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
    function makeWeek() {
        const start = new Date();
        const end = new Date(start.valueOf() + ONE_WEEK);
        return Object.assign(Object.assign({}, start), { end });
    }
    const thisWeek = makeWeek();
    thisWeek.toISOString();
    thisWeek.end.toISOString();
}
