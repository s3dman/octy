async function Page({ params }) {
	return (
		<>
			<h1>ORGANIZATION PAGE</h1>
			<h3>ORG: {params.orgname}</h3>
		</>
	);
}

export default Page;
