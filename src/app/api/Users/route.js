import connectMongo from "@/lib/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function createTransaction(request) {
	try {
		const { wallet, campaignId, fractSum } = await request.json();

		await connectMongo();

		const user = await Users.findOne({ wallet: wallet });

		if (!user) {
			return NextResponse.error(
				{ message: "User not found" },
				{ status: 404 },
			);
		}

		let updated = false;
		for (let i = 0; i < user.campaigns.length; i++) {
			if (user.campaigns[i][0] === campaignId) {
				user.campaigns[i][1] = fractSum;
				updated = true;
				break;
			}
		}

		if (!updated) {
			return NextResponse.error(
				{ message: "Campaign not found for the user" },
				{ status: 404 },
			);
		}

		await user.save();

		// Return success response
		return NextResponse.json(
			{ message: "Transaction request created successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error creating transaction request:", error);
		return NextResponse.error(
			{ message: "Error creating transaction request" },
			{ status: 500 },
		);
	}
}
