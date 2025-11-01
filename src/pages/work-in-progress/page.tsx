import { useNavigate } from 'react-router-dom';

export default function WorkInProgress() {
    const navigate = useNavigate();

	return (<>
		<div className="container" >
		<div className="wipBox">
			<hr className="article top"/>
			<h1 className="constructionBanner">UNDER CONSTRUCTION!</h1>
			<hr className="article bottom" />

			<button onClick={() => navigate(-1)}>[Go Back]</button>
			<p>Unfortunately this section of the website is currently pending implementation!</p>
			<p>As a static website, updates may take a while to release - please keep checking in though!</p>

			<hr className="article footer" />
		</div>
	</div >
	</>
	);
};