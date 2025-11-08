import getImageGallery from "../_components/projects/getImageGallery";
import Carousel from "../_components/projects/imageCarousel";
import { Link } from "react-router-dom";

export default function DestructDroid() {

    return <>
        <div className="container project">
            <h2>Team Project: Destruct Droid</h2>
            <hr />
            <p>A module in university-based around multi-disciplined teamwork to create a computer game together (3rd year university work).</p>
            <hr />
            <h4>About:</h4>
            <p>During this project, I was part of a team that focused on the underlying coding of a game built in the Unreal engine.  The project included a remote artist and management team; we required weekly meetings and updates about the direction of the project and the art assets.</p>
            <p>The goal for the project was to create a few levels where the player would have to destroy the city they were in before they were either destroyed by the city defences or the expiration of a set timer.</p>
            <p>Some of the features we were aiming to add were:</p>
            <ul>
                <li>Buildings  - representing score targets and the city/town they were in.</li>
                <li>Enemy Ground defences.</li>
                <li>
                    <ul>
                        <li>Ships</li>
                        <li>Tanks</li>
                        <li>Turrets</li>
                    </ul>
                </li>
                <li>Enemy Air defences.</li>
                <li>
                    <ul>
                        <li>Helicopters</li>
                        <li>Fighter jets</li>
                    </ul>
                </li>
                <li>Unique City levels(cultural styles).</li>
                <li>
                    <ul>
                        <li>Rio-de-Janeiro</li>
                        <li>Manhattan</li>
                        <li>London</li>
                        <li>Tokyo</li>
                    </ul>
                </li>
            </ul>
            <p>My responsibility and focus in the team was to communicate and integrate the artist team’s assets into the game. My role ensured that the technical aspects of asset integration were smooth and visually matched the intended aesthetics for the project;  this included shader effects(visual effects, reflections and emissive lighting properties) for models, level creation and asset scaling.</p>
            <p>Near the project release for the assignment, unfortunately, we only received two robot models and one tank model (lacking appropriate mesh complexity to scale appropriately). Despite the limitations, we did have a scoring system that kept track of building destruction and a health bar system that would track the players' health.</p>
            <div className="flex center" >
                <h4>Final Scenes</h4>
                <hr />
                <Carousel height="400px" imgList={getImageGallery("destruct_droid")} />
            </div>
            <p>As part of delivering a rounded experience, I wanted to ensure that we had some city defences to provide a threat to the player when they attempted to destroy the city levels; during a meeting, I presented some example models we could use as prototype tanks and helicopter models.</p>
            <p>Working closely with J. Evans, who worked with AI/pathing aspects of the game, we ensured turret movement acted separately from the body of the tank and manually tested the result of the enemy.</p>
            <p>I also worked on the menu system, creating the “Customise” and “Options” sub-menus to help control and modify the settings and rules.</p>
            <hr />
            <p><em>Created with: C/C++, 3DS Max, HLSL(Unreal Blueprint system).</em></p>
            <hr />
            <details><summary><strong>Project team, 2015</strong></summary>
                <p><strong>Programmers</strong>:<br/><em>Alan Davies, J. Reynolds, J. Evans, K. Pabari, H. Conibere and S. Skinner.</em></p>
                <p><strong>Artists team</strong>:<br/><em>S. Smith, various artists.</em></p>
                <p><strong>Design team</strong>:<br/><em>“JJ”, David, Rob</em></p>
            </details>
            <p><em><strong>Module Lecturer</strong>: Mike Reddy&nbsp;(University of South Wales)</em></p>
            <hr />
            <Link className="project__return-link" to={`../projects#destruct_droid`}> Return </Link>
        </div>
    </>
}