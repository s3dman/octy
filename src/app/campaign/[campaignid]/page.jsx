"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

import { donate } from "@/lib/block";

function CampaignPage({ params }) {
	const [campaignData, setCampaignData] = useState(null);
	const [senderKey, setSenderKey] = useState("");
	const [fract, setFract] = useState([]);
	const [value, setValue] = useState("");
	const [modalIsOpen, setModalIsOpen] = useState(false);

	useEffect(() => {
		fetchDataFromMongoDB();
	}, []);

	const fetchDataFromMongoDB = async () => {
		try {
			const response = await axios.get(
				"/api/Campaigns/?id=" + params.campaignid,
			);
			setCampaignData(response.data.campaigns);
			setFract(Array(response.data.campaigns.services.length).fill(0));
		} catch (error) {
			console.error("Error fetching campaign data:", error);
		}
	};

	const handleDonation = async () => {
		try {
			const response = await axios.get(
				"/api/Campaigns/?id=" + params.campaignid,
			);
			setCampaignData(response.data.campaigns);
			setFract(Array(response.data.campaigns.services.length).fill(0));
		} catch (error) {
			console.error("Error fetching campaign data:", error);
		}

		try {
			// fetch current fract distribution of campaign and each user
			// recalculate fract

			// do donation
			// const res = await donate(
			//     campaignData.wallet,
			//     senderKey,
			//     fract,
			//     value
			// );
			console.log(campaignData.wallet);
			console.log(senderKey);
			console.log(fract);
			console.log(value);
		} catch (error) {
			console.error("Error distributing donations:", error);
		}
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const openModal = () => {
		setModalIsOpen(true);
	};

	const toggleDonation = (index) => {
		setFract((prevFract) => {
			const newFract = [...prevFract];
			newFract[index] = newFract[index] === 1 ? 0 : 1; // Toggle value
			return newFract;
		});
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
			<div className="container mx-auto">
				<h1 className="text-3xl font-semibold mb-4">Campaign Data</h1>
				{campaignData && (
					<div className="grid grid-cols-2 gap-4">
						<div>
							<p className="text-lg font-semibold mb-2">
								Campaign Name:
							</p>
							<p>{campaignData.campaign_name}</p>
						</div>
						<div>
							<p className="text-lg font-semibold mb-2">
								Amount Raised:
							</p>
							<p>{campaignData.amt_raised}</p>
						</div>
						<div>
							<p className="text-lg font-semibold mb-2">
								Description:
							</p>
							<p>{campaignData.desc}</p>
						</div>
						<div>
							<p className="text-lg font-semibold mb-2">
								Wallet:
							</p>
							<p>{campaignData.wallet}</p>
						</div>
						<div className="col-span-2 flex justify-center">
							<button
								onClick={openModal}
								className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
							>
								Make Donation
							</button>
						</div>
					</div>
				)}
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				ariaHideApp={false}
				contentLabel="Make Donation"
				className="modal fixed w-96 bg-gray-800 rounded-lg p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				overlayClassName="overlay fixed bg-black bg-opacity-75 inset-0"
			>
				<div className="modal-content">
					<input
						type="password"
						placeholder="Enter sender's private key"
						value={senderKey}
						onChange={(e) => setSenderKey(e.target.value)}
						className="mb-4 w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
					/>
					{fract.map((donate, index) => (
						<div key={index} className="mb-2 flex items-center">
							<input
								type="checkbox"
								checked={donate === 1}
								onChange={() => toggleDonation(index)}
								className="mr-2"
							/>
							<label className="text-white">
								Recipient {index + 1}
							</label>
						</div>
					))}
					<input
						type="text"
						placeholder="Enter donation amount"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						className="mb-4 w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
					/>
					<button
						onClick={handleDonation}
						className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
					>
						Submit Donation
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default CampaignPage;
