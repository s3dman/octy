"use client";
import React, { useState, useEffect } from "react";
import TypewriterEffectSmooth from "@/components/ui/typewriter-effect";
import axios from "axios";
import Link from "next/link";

const Section = () => {
	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		fetchCampaigns();
	}, []);

	const fetchCampaigns = async () => {
		try {
			const response = await axios.get("/api/Campaigns");
			setCampaigns(response.data.campaigns);
		} catch (error) {
			console.error("Error fetching campaigns:", error);
		}
	};

	// Function to generate a bluish-gray tone color
	const getBluishGrayColor = () => {
		const grayValue = Math.floor(Math.random() * 100) + 100; // Generate gray value between 100 and 200
		return `rgb(${grayValue}, ${grayValue}, ${255})`; // Set blue value to maximum (255) for bluish tone
	};

	return (
		<section className="text-gray-400 body-font bg-gray-900">
			<div className="container px-5 py-10 mx-auto">
				<div className="flex flex-wrap w-full mb-20">
					<div className="lg:w-3/4 w-full mb-6 lg:mb-0">
						<h1 className="sm:text-xs text-xs font-medium mb-2 text-white">
							<TypewriterEffectSmooth
								words={[
									{ text: "Blockchain" },
									{ text: "Charity" },
									{ text: "Donation" },
									{
										text: "with",
										className:
											"text-blue-500 dark:text-blue-500",
									},
									{ text: "OCTY." },
								]}
							/>
						</h1>
						<div className="h-1 w-20 bg-indigo-500 rounded"></div>
					</div>
					<p
						className="lg:w-3/4 w-full leading-relaxed text-lg text-indigo-200"
						style={{ marginTop: "2rem" }}
					>
						Octy-Open Charity is revolutionizing the world of
						charitable giving through blockchain technology. Our
						mission is simple yet profound: to bring transparency,
						trust, and accountability to the donation process,
						empowering donors and charitable organizations alike to
						create a positive impact on a global scale.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{campaigns.map((campaign, index) => (
						<div key={index} className="w-full p-4">
							<Link href={`/campaign/${campaign._id}`}>
								<div
									className="p-6 rounded-lg cursor-pointer"
									style={{
										backgroundColor: getBluishGrayColor(),
									}}
								>
									<h3 className="tracking-widest text-black-400 text-xs font-medium title-font text-black">
										{campaign.services}
									</h3>
									<br />
									<h2 className="text-lg text-black font-medium title-font mb-4">
										{campaign.campaign_name}
									</h2>
									<br />
									<p className="leading-relaxed text-base text-black">
										{campaign.desc}
									</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Section;
