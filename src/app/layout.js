// import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>OCTY</title>
			</head>

			<body>
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
