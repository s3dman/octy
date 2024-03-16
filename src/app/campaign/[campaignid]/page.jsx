// 1) for donor to donate and view dash
// 2) for org to view
async function Page({ params }) {
	return (
		<>
			<h1>ORGANIZATION PAGE</h1>
			<h3>ORG: {params.orgid}</h3>
		</>
	);
}

export default Page;
