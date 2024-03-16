"use client";
import React, { useState } from "react";

function CreateOrgForm() {
	// State variables to store form data
	const [orgName, setOrgName] = useState("");
	const [walletAddress, setWalletAddress] = useState("");
	const [description, setDescription] = useState("");

	// Function to handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Here you can perform actions like sending form data to the server
		console.log("Form submitted:", { orgName, walletAddress, description });
		// Clear form fields after submission
		setOrgName("");
		setWalletAddress("");
		setDescription("");
	};

	return (
		<div>
			<h1>Create Organization</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="orgName">Organization Name:</label>
					<input
						type="text"
						id="orgName"
						value={orgName}
						onChange={(e) => setOrgName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="walletAddress">Wallet Address:</label>
					<input
						type="text"
						id="walletAddress"
						value={walletAddress}
						onChange={(e) => setWalletAddress(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="description">Description:</label>
					<textarea
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Create Organization</button>
			</form>
		</div>
	);
}

export default CreateOrgForm;
