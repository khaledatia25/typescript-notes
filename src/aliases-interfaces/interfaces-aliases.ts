import { UserContactInfo, UserInfoOutcome, SpecialDate } from "./types";

function printContactInfo(info: UserContactInfo){
    console.log(info);
    console.log(info.email);
}

function GetUserInfo() :UserInfoOutcome{
        if(Math.random() > .5 ){
            return [
                "success", 
                {
                    name:"khaled",
                    email: "khaled$khaled.khaled"
                }
            ]
        }else {
            return [
                "error",
                new Error()
            ]
        }
}

const newYearEve: SpecialDate = {
    ...new Date(), 
    getReason: () => "Last Day of The Year"
}