
export const metadata = { title: 'Page WIP' };

export default function WorkInPProgress() {

	return (<>
		<div className="container" >
			<div style={{ "textAlign": "center", "margin": " 5vh 0vh" }} >
				<div className="div page" style={{ "margin": "50px auto" }} />
				<h1 style={{ "backgroundImage": "repeating-linear-gradient( -45deg, #c8cb1473 0 20px, black 20px 40px )", "border": "0.2em solid black" }}>UNDER CONSTRUCTION!</h1>
				<div className="div page" style={{ "margin": "50px auto 25px auto" }} />
				<a href="javascript:history.back()">[Go Back]</a>
				<p >Unfortunately this section of the website is currently pending implementation!</p>
				<p>As a static website, updates may take a while to release - please keep checking in though!</p>
				<div className="div page" style={{ "margin": "25px auto" }} />
			</div>
		</div >
	</>
	);
};