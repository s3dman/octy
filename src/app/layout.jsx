"use client";
import React from "react";
import FloatingNav from "@/components/ui/floating-navbar";

export function FloatingNavDemo() {
	const navItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Dashboard",
			link: "/dash",
		},
		{
			name: "About",
			link: "/about",
		},
	];

	return (
		<div className="relative  w-full">
			<FloatingNav navItems={navItems} />
			<DummyContent />
		</div>
	);
}

const DummyContent = () => {
	return (
		<div className="grid grid-cols-1 h-[20rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
			<p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
				Scroll back up
			</p>
			<div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
		</div>
	);
};

import "@/globals.css";
import Header from "@/components/Header";
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>octy</title>
			</head>
			<body>
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
