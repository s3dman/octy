import connectMongo from "@/lib/mongodb";
import Orgs from "@/models/orgs";
import { NextResponse } from "next/server"

export async function POST(request){
    const { orgs_id, campaigns }= await request.json()

    await connectMongo();
    await Orgs.create({orgs_id, campaigns});
    return NextResponse.json({message:"Org created"}, {status : 201})

} 
