import Link from "next/link";

export default function project() {

    return <>
        <div className="container">
            <h2>Unity Research Project: C#</h2>
            <hr />
            <h4>Summary:</h4>
            <p>An investigative project utilising my combined skills after university; exploring C#, .NET functionality and Cg Shader language.</p>
            <hr />
            <h4>About:</h4>
            <p>This project was originally developed as to learn unity for an internship with a 3D based company, sadly the prototype sent out did not receive any feedback, but I continued to investigate Unity 3D to expand my knowledge in the engine.</p>
            <p>This project includes script-driven menus, scenes exploring 3D graphic shaders, physics, custom character controller, camera movement and .NET/system file handling.</p>
            <p><strong>.NET usage</strong></p>
            <p>A major feature of the .NET system in this project is the reading of files store in a public area of the projects file system. This script reads all the files, stores the names of all material files and then uses the name references to add the materials to a list that can be called upon else where.</p>
            <p>This .NET driven system was developed due to poor support that Unity has with handling extreme numbers of materials; requiring manual click/dragging of materials to a public array. This newly created system allows for hundreds (possibly more) materials to be automatically assigned for use.</p>
            <p><strong>Custom Raycaster</strong></p>
            <p>Another massive development of this project is custom ray caster, the unity character controller struggles to use ray casting to target objects in a scene with a first person camera, this is due to the hiding of the mouse pointer (the dependency), I have written a custom raycaster that enables the use of interaction with the first person camera controller.</p>
            <hr />
            <h4>Final Scenes</h4>
            <hr />
            <p>- pending image gallery/carousel -</p>
            <hr />
            <h4><span>GitHub Repository:</span></h4>
            <p>pending</p>
            <hr /><p><em>Created with: C#, MonoDevelop&nbsp;and Cg shader language.</em></p>
            <p><em>Created by: Alan Davies</em></p>
            <hr />
            <Link href={`../projects#unity_research`}>[ return ]</Link>
        </div>
        <div className="container">
            <h2>Image Gallery</h2>
            <hr className='mainTitle' />
            <p>Pending</p>
        </div>
    </>
}