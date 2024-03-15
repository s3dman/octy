import connectMongo from "@/lib/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server"

export async function POST(request){
    const {user_id, past_campaigns, past_services} = await request.json();

    await connectMongo();
    await Users.create({user_id, past_campaigns, past_services});
    return NextResponse.json({message:"User created"}, {status : 201})

} 