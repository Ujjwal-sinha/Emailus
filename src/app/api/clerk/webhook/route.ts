import { db } from "~/server/db";

export const POST =async (req:Request)=>{
    const {data}=  await req.json();
    console.log(data);
    const email= data.email_addresses[0].email_address;
    const firstname= data.first_name;
    const lastname =data.last_name;
    const imageurl=data.image_url;
    const id = data.id;

    await db.user.create({
        data:{
            id : id,
            email:email,
            firstname:firstname,
            lastname:lastname,
            imageurl:imageurl,

        }
    })
    console.log("user created")
    return new Response("webhook received",{status:200});
}