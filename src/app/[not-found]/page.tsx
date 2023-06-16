
export const metadata = {title : '404 - Not Found'};

export default function Custom404() {
	
	return (<>
			<div className="container">
				<div style={{"textAlign":"center", "margin":" 5vh 0vh"}} >
					<div className="div page" style={{"margin":"50px auto"}} />
					<h1>Error 404</h1>
					<br />
					<h2>Page not Found!</h2>
					<div className="div page" style={{"margin":"50px auto"}} />
				</div>
			</div>
	</>
	);
};