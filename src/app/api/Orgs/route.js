import connectMongo from "@/lib/mongodb";
import Orgs from "@/models/orgs";
import { NextResponse } from "next/server"

export async function POST(request){
    const {org_name, org_wallet, campaigns, desc }= await request.json()

    await connectMongo();
    const org = await Orgs.create({org_name, org_wallet, campaigns, desc});
    return NextResponse.json({message:"Org created", org_id:org._id}, {status : 201})

} 
