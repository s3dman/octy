async function Page({ params }) {
	return (
		<>
			<h1>USER CAMPAIGN OVERVIEW</h1>
			<h3>CAMPAIGN: {params.id}</h3>
		</>
	);
}

export default Page;
