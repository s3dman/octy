import React from "react";

import Header from "@/components/Header"
import Section from "@/components/Section"
import FloatingNav from "@/components/ui/floating-navbar"
import { FloatingNavDemo } from "./layout"

async function Page() {
	return (
		<div>
			<Header />
			<Section />
			<FloatingNav />
			<FloatingNavDemo />
		</div>
	)
}
export default Page;