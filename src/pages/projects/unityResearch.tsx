import getImageGallery from "../_components/projects/getImageGallery";
import Carousel from "../_components/projects/imageCarousel";
import { Link } from "react-router-dom";

export default function UnityResearch() {

    return <>
        <div className="container project">
            <h2>Unity Research Project: C#</h2>
            <hr />
            <p>This project was an investigation into C# and Cg Shader language in the Unity engine.</p>
            <hr />
            <h4>About:</h4>
            <p>As part of my passion for real-time rendering, I decided to explore Unity and look at translating my shader knowledge into 3D scenes. This project coincided with a role I applied for with a company that worked with structural design; I provided the project as a demonstration of my Unity knowledge and capabilities. I received no feedback, but I continued to investigate Unity 3D to expand my knowledge of working with the engine.</p>
            <p>This project includes script-driven menus, scenes exploring 3D graphic shaders, physics, custom character controller, camera movement and. NET/system file handling.</p>
            <p>Using C#, I created an adapter function for a file that stored the names of all material files and referenced this hook to add the materials to any object that called this function; this proved to be a great way to allow the user to select an object in the scene to modify its respective display and demonstrate quick adjustments to the preview on request.</p>
            <p>Part of this solution extended outside the provided tooling from the unity engine at the time; this newly created system allows hundreds of materials to be available for use, being simple to update the list in the future.</p>
            <div className="flex center">
                <hr />
                <h4>Final Scenes</h4>
                <hr />
                <Carousel height="400px" imgList={getImageGallery("unity_research")} />
            </div>
            <p>Another development of this project is a custom raycaster as part of the challenge of creating interaction in a 3-dimensional space. Using a raycaster allows the user to target objects in a scene with a first-person camera by firing a line to collide with a specific object; I had to write a custom raycaster that enables the use of interaction with the first-person camera controller as the provided system for Unity had collision issues with the crosshair object and thus failed to behave successfully.</p>
            <p>Through the combination of the raycaster and material swapper, I created a model set in the scene that a user could click on and change the texture/material that coated it; I hoped that it would present as a good feature, demonstrating different atmospheres by allowing the user to change the model - using provided materials and surfaces.</p>
            <hr />
            <h4><span>GitHub Repository:</span></h4>
            <p>pending</p>
            <hr /><p><em>Created with: C#, MonoDevelop&nbsp;and Cg shader language.</em></p>
            <p><em>Created by: Alan Davies</em></p>
            <hr />
            <Link className="project__return-link" to={`../projects#unity_research`}> Return </Link>
        </div>
    </>
}