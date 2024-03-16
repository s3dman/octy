import mongoose, { Schema } from "mongoose";

const campaignSchema = new Schema(
	{
		campaign_name: String,
		services: Array,
		amt_raised: Number,
		desc: String,
		wallet: String,
		fract: Array,
	},
	{
		timestamps: true,
	},
);

const Campaigns =
	mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema);

export default Campaigns;
