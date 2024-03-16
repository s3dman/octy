import connectMongo from "@/lib/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server"

export async function POST(request){
    const {past_campaigns, past_services} = await request.json();

    await connectMongo();
    const user = await Users.create({past_campaigns, past_services});
    return NextResponse.json({message:"User created", user_id:user._id}, {status : 201})

} 
