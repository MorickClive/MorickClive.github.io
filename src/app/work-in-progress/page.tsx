
export const metadata = { title: 'Page WIP' };

export default function WorkInProgress() {

	return (<>
		<div className="container" >
		<div className="wipBox">
			<hr className="article top"/>
			<h1 className="constructionBanner">UNDER CONSTRUCTION!</h1>
			<hr className="article bottom" />

			<a href="javascript:history.back()">[Go Back] </a>
			<p>Unfortunately this section of the website is currently pending implementation!</p>
			<p>As a static website, updates may take a while to release - please keep checking in though!</p>

			<hr className="article footer" />
		</div>
	</div >
	</>
	);
};