import connectMongo from "@/lib/mongodb";
import Campaigns from "@/models/campaigns";
import { NextResponse } from "next/server"

export async function POST(request){
    const { campaign_name, services, amt_raised, desc, wallet}= await request.json()

    await connectMongo();
    const campaign = await Campaigns.create({campaign_name, services, amt_raised, desc, wallet});
    return NextResponse.json({message:"Campaign created", campaign_id:campaign._id}, {status : 201})
} 

export async function GET(){
    await connectMongo();
    const campaigns = await Campaigns.find();
    return NextResponse.json({campaigns});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongo();
    await Campaigns.findByIdAndDelete(id);

    return NextResponse.json({message:"Campaign deleted"}, {status:200});
    
}
