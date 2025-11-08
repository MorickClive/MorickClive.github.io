import { useNavigate } from 'react-router-dom';

export default function WorkInProgress() {
    const navigate = useNavigate();

	return <main id="main">
		<div className="container" >
			<div className="wipBox">
				<hr className="article top"/>
				<h1 className="constructionBanner">UNDER CONSTRUCTION!</h1>
				<hr className="article bottom" />

				<button onClick={() => navigate(-1)}>[Go Back]</button>
				<p>Unfortunately isn't a valid path at the moment.</p>
				<p>Updates may take a while to release, this path might be available in the future!</p>

				<hr className="article footer" />
			</div>
		</div >
	</main>
};