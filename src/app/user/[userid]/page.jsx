async function Page({ params }) {
	return (
		<>
			<h1>USER PAGE</h1>
			<h3>USERID: {params.userid}</h3>
		</>
	);
}

export default Page;
