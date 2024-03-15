import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        user_id:String,
        past_campaigns:[{
            type:Schema.Types.ObjectId, ref: 'Campaign'
        }],
        past_services:Array,
    },
    {
        timestamps:true
    }
);


const Users = mongoose.models.Users || mongoose.model("User", userSchema)

export default Users;

