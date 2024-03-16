import connectMongo from "@/lib/mongodb";
import Users from "@/models/users";
import Campaigns from "@/models/campaigns";
import { NextResponse } from "next/server";

export async function createUser(request) {
    try {
        const { wallet } = await request.json();

        await connectMongo();
        const user = await Users.create({
            wallet,
        });
        return NextResponse.json(
            { message: "User created", user_id: user._id },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.error(
            { message: "Error creating user" },
            { status: 500 }
        );
    }
}

export async function updateCampaign(request) {
    try {
        const { id, fract } = await request.json();

        await connectMongo();
        const updatedCampaign = await Campaigns.findByIdAndUpdate(
            [campaignid]{eac element in fract gets updated by current fract},
            { new: true }
        );
        if (!updatedCampaign) {
            return NextResponse.error(
                { message: "Campaign not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: "Campaign updated", campaign: updatedCampaign },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating campaign:", error);
        return NextResponse.error(
            { message: "Error updating campaign" },
            { status: 500 }
        );
    }
}

export async function createCampaign(request) {
    try {
        const { campaign_name, services, amt_raised, desc, wallet } =
            await
}
