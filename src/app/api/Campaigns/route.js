import connectMongo from "@/lib/mongodb";
import Campaigns from "@/models/campaigns";
import { NextResponse } from "next/server"

export async function POST(request){
    const { campaign_id, services, amt_raised, desc, wallet}= await request.json()

    await connectMongo();
    await Campaigns.create({campaign_id, services, amt_raised, desc, wallet});
    return NextResponse.json({message:"Campaign created"}, {status : 201})

} 
