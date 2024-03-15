import mongoose, {Schema} from "mongoose";

const campaignSchema = new Schema(
    {
        campaign_id:String,
        services:Array,
        amt_raised:Number,
        desc:String,
        wallet:String
    },
    {
        timestamps:true
    }
);


const Campaigns = mongoose.models.campaigns || mongoose.model("Campaign", campaignSchema)

export default Campaigns;

