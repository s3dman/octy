import mongoose, {Schema} from "mongoose";

const orgSchema = new Schema(
    {
        orgs_id:String,
        campaigns:[{
            type:Schema.Types.ObjectId, ref: 'Campaign' //Foreign key to campaign table 
        }]
    },
    {
        timestamps:true
    }
);


const Orgs = mongoose.models.orgs || mongoose.model("Org", orgSchema)

export default Orgs;

