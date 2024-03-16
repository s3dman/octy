"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CampaignPage({ params }) {
	const [campaignData, setCampaignData] = useState(null);

	useEffect(() => {
		fetchDataFromMongoDB();
	}, []);

	const fetchDataFromMongoDB = async () => {
		try {
			const response = await axios.get(
				"/api/Campaigns/?id=" + params.campaignid,
			);
			setCampaignData(response.data.campaigns);
		} catch (error) {
			console.error("Error fetching campaign data:", error);
		}
	};

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl font-semibold mb-4">Campaign Data</h1>
			<div className="grid grid-cols-3 gap-4">{campaignData._id}</div>
		</div>
	);
}

export default CampaignPage;
