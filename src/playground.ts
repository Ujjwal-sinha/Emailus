import { db } from "./server/db";


await db.user.create({
    data:{
        email:"ujjwal@Fan.com",
        firstname:"ujjjj",
        lastname:"sss"
    }
})