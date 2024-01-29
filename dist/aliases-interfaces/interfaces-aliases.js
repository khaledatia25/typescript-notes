function printContactInfo(info) {
    console.log(info);
    console.log(info.email);
}
function GetUserInfo() {
    if (Math.random() > .5) {
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
const newYearEve = Object.assign(Object.assign({}, new Date()), { getReason: () => "Last Day of The Year" });
export {};
