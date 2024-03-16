import mongoose, {Schema} from "mongoose";

const orgSchema = new Schema(
    {
        org_name:String,
        org_wallet:String,
        campaigns:Array,
        desc:String
    },
    {
        timestamps:true
    }
);


const Orgs = mongoose.models.orgs || mongoose.model("Org", orgSchema)

export default Orgs;

