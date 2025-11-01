
export const metadata = {title : '404 - Not Found'};

export default function NotFound() {
	
	return (<>
			<div className="container">
				<div style={{"textAlign":"center", "margin":" 5vh 0vh"}} >
					<hr className="page" style={{"margin":"50px auto"}} />
					<h1>Error 404</h1>
					<h2>Page not Found!</h2>
					<hr className="page" style={{"margin":"50px auto"}} />
				</div>
			</div>
	</>
	);
};