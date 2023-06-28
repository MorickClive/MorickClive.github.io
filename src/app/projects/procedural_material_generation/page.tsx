import Link from "next/link";

export default function project() {
    return <>
        <div className="container">
            <h2>Dissertation – Procedural Materials</h2>
            <hr />
            <h4>Summary:</h4>
            <p>A project about the creation of procedural textures with shader effects in computer graphics, utilising processing power to simulate real materials.</p>
            <p ><em>Created with: C/C++, OpenGL, DirectX and Unreal Engine 4</em></p>
            <hr />
            <h4>About:</h4>
            <p>This project involved the development of textures through mathematical algorithms based on the works of Ken <em>Perlin</em>&nbsp;(1983), the technique has been adapted to generate textures/materials that demonstrate a chaotic design. Using the graphical pipeline to control pixel data, mathematical functions can be applied to perlin noise to create unique and interesting material effects that can be generated with a relatively low CPU cost.</p>
            <p>My dissertation looked into the creation of procedural textures in order to research into the possibility of generating 3D textures rather than commonly used 2D textures. I ended up developing the project on OpenGL(with GLSL), DirectX 11 (with HLSL) this gave me a greater understanding of the application of shaders and ability to transfer shaders between different languages.</p>
            <p>The final goal was to generate “procedural materials for video game assets”, I finalised my project by creating the textures procedurally in Unreal Engine 4, applying the textures into the channel of a default model provided (First Person Shooter gun model). A sample of this can be seen below:</p>
            <a href="..\\img\\projects\\proceduralgeneration\\procedural.png" target="_blank"><img src="..\\img\\projects\\proceduralgeneration\\procedural.png" width="424" height="241" /></a>
            <hr />
            <h4><strong>Samples:</strong></h4>
            <p>Although there are differences, OpenGL presented a model handling bug. As a result the development was continued on DirectX 11 until finally the shader was translated for use in Unreal Engine 4.</p>
            <p><strong><span >Video: Sine wave testing</span></strong></p>
            <p>Below are video of the sine function being control by a time variable.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/imOZ9gtBvSs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p>A unique factor about textures generated in the shader with functions is that we can test multiple iterations of a function using time.</p>
            <p>As time increases, the sine wave increases/decreases the frequency of waves rippling through the noise texture. For example, the wood texture appears to lose rings over time, regaining rings when the value enters a negative range.</p>
            <hr />
            <p ><em>Project created by Alan Davies, 2016.</em></p>
            <p ><em>Supervised by Paul Angel &amp; Carl Jones (2016, University of South Wales).</em></p>
            <hr />
            <Link href="../projects#procedural_material_generation">[ return ]</Link>
        </div>
        <div className="container">
            <h2>Image Gallery</h2>
            <hr className='mainTitle' />
            <p>Pending</p>
        </div>
    </>
}

