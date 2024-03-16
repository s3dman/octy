"use client";
import React, { useState } from "react";
import { deploy } from "@/lib/block";

function CreateCampaignPage() {
	// State variables to store form data
	const [campaignName, setCampaignName] = useState("");
	const [recipientAddresses, setRecipientAddresses] = useState([""]);
	const [orgPrivateKey, setOrgPrivateKey] = useState("");
	const [campaignAddress, setCampaignAddress] = useState("");
	const [description, setDescription] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const saveCampaign = async () => {
		try {
			const response = await axios.post("/api/Campaigns/", {
				campaignName,
				recipientAddresses,
				description,
				campaignAddress,
			});
			if (response.status === 200) {
				console.log("Campaign data saved successfully");
			}
		} catch (error) {
			console.error("Error saving campaign data:", error);
		}
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await deploy(orgPrivateKey, recipientAddresses);
			setCampaignAddress(res[0].target);
			await saveCampaign(); // post request with state variables in body

			setSubmitted(true);
		} catch (error) {
			console.error("Error deploying campaign:", error);
		}
	};

	// Function to handle changes in recipient address inputs
	const handleRecipientChange = (index, value) => {
		const updatedAddresses = [...recipientAddresses];
		updatedAddresses[index] = value;
		setRecipientAddresses(updatedAddresses);
	};

	// Function to add a new recipient input field
	const addRecipientField = () => {
		setRecipientAddresses([...recipientAddresses, ""]);
	};

	// Function to remove a recipient input field
	const removeRecipientField = (index) => {
		const updatedAddresses = [...recipientAddresses];
		updatedAddresses.splice(index, 1);
		setRecipientAddresses(updatedAddresses);
	};

	return (
		<div className="flex justify-center items-center h-screen dark:bg-gray-800">
			<div className="max-w-md w-full bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<h1 className="text-center text-3xl font-semibold mb-4 dark:text-white">
					Create Campaign
				</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="campaignName"
							className="block mb-1 dark:text-white"
						>
							Campaign Name:
						</label>
						<input
							type="text"
							id="campaignName"
							value={campaignName}
							onChange={(e) => setCampaignName(e.target.value)}
							required
							className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="description"
							className="block mb-1 dark:text-white"
						>
							Description:
						</label>
						<textarea
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
							className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						></textarea>
					</div>
					<div className="mb-4">
						<label
							htmlFor="recipientAddresses"
							className="block mb-1 dark:text-white"
						>
							Recipient Addresses:
						</label>
						{recipientAddresses.map((address, index) => (
							<div key={index} className="flex items-center mb-2">
								<input
									type="text"
									value={address}
									onChange={(e) =>
										handleRecipientChange(
											index,
											e.target.value,
										)
									}
									required
									className="w-full border rounded px-3 py-2 mr-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
								/>
								<button
									type="button"
									onClick={() => removeRecipientField(index)}
									className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 dark:bg-gray-800 dark:hover:bg-red-700"
								>
									-
								</button>
							</div>
						))}
						<button
							type="button"
							onClick={addRecipientField}
							className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-blue-700"
						>
							Add Recipient
						</button>
					</div>
					<div className="mb-4">
						<label
							htmlFor="orgPrivateKey"
							className="block mb-1 dark:text-white"
						>
							Organization Wallet Private Key:
						</label>
						<input
							type="password"
							id="orgPrivateKey"
							value={orgPrivateKey}
							onChange={(e) => setOrgPrivateKey(e.target.value)}
							required
							className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-blue-700"
					>
						Create Campaign
					</button>
				</form>
				{submitted && (
					<p className="text-green-600 text-center dark:text-green-400">
						Campaign deployed successfully!
					</p>
				)}
			</div>
		</div>
	);
}

export default CreateCampaignPage;
