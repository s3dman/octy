import connectMongo from "@/lib/mongodb";
import Campaigns from "@/models/campaigns";
import { NextResponse } from "next/server";

export async function POST(request) {
	const { campaign_name, services, amt_raised, desc, wallet } =
		await request.json();

	await connectMongo();
	const campaign = await Campaigns.create({
		campaign_name,
		services,
		amt_raised,
		desc,
		wallet,
	});
	return NextResponse.json(
		{ message: "Campaign created", campaign_id: campaign._id },
		{ status: 201 },
	);
}

export async function GET(request) {
	const id = request.nextUrl.searchParams.get("id");

	try {
		await connectMongo();
		let campaigns;

		if (id) {
			campaigns = await Campaigns.findById(id);
		} else {
			campaigns = {};
		}

		return NextResponse.json({ campaigns });
	} catch (error) {
		console.error("Error fetching campaigns:", error);
		return NextResponse.error(
			{ message: "Error fetching campaigns" },
			{ status: 500 },
		);
	}
}
