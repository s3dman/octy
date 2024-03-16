import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        past_campaigns:String,
        past_services:Array,
    },
    {
        timestamps:true
    }
);


const Users = mongoose.models.Users || mongoose.model("User", userSchema)

export default Users;

