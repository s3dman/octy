async function Page({ params }) {
	return (
		<>
			<h1>CAMPAIGN PAGE</h1>
			<h3>ORG: {params.orgname}</h3>
			<h3>CAMPAIGN: {params.id}</h3>
		</>
	);
}

export default Page;
