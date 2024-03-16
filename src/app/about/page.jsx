"use client";
import "@/globals.css";
import Header from "@/components/Header";
import TextGenerateEffect from "@/components/ui/text-generate-effect";

const words =
	"Octy-Open Charity is revolutionizing the world of charitable giving through blockchain technology. Our mission is simple yet profound: to bring transparency, trust, and accountability to the donation process, empowering donors and charitable organizations alike to create a positive impact on a global scale.";

export default function TextGenerateEffectDemo() {
	return (
		<div>
			<Header />
			<TextGenerateEffect words={words} />
		</div>
	);
}
