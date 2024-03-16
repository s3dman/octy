import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		wallet: String,
		campaigns: Array,
	},
	{
		timestamps: true,
	},
);

const Users = mongoose.models.Users || mongoose.model("User", userSchema);

export default Users;
