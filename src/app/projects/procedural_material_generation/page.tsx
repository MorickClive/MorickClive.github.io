import getImageGallery from "@/lib/getImageGallery";
import Carousel from "@/lib/imageCarousel";
import Link from "next/link";

const imageList = getImageGallery("procedural_material_generation");

export default function project() {
    return <>
        <div className="container project">
            <h2>Dissertation – Procedural Materials</h2>
            <hr />
            <p>A project about the creation of procedural textures with shader effects in computer graphics, utilising processing power to simulate real materials.</p>
            <hr />
            <h4>About:</h4>
            <p>This project involved the development of textures through mathematical algorithms based on the works of Ken Perlin (1983); the technique has to generate texture/materials that utilise the chaotic nature of Perlin noise to skew sine waves. Using a shader pipeline, I passed pixel data through Perlin noise to create a unique effect, processed by mathematical expression rather than data from an image file.</p>
            <p>My dissertation researched the creation of procedural textures to research the possibility of generating 3D textures - rather than simply using 2D textures. I developed the project on OpenGL(with GLSL) and migrated it to DirectX 11 (with HLSL); this provided me with a greater understanding of the application of shaders and the ability to transfer shaders code/pipelines between different languages.</p>
            <p>The final goal was to generate “procedural materials for video game assets”, I finalised my project by creating the textures procedurally in Unreal Engine 4, applying the textures into the channel of a default model provided (First Person Shooter gun model).</p> 
            <hr />
            <p>Final renders of generated texture:</p> 
            <hr />
            <Carousel height="315px" imgList={imageList} />
            <hr />
            <h4><strong>Results/Findings:</strong></h4>
            <p>Although there are differences, OpenGL presented a UI mapping bug that misaligned with the model; as a result, the development was translated onto DirectX 11 and adapted for use in Unreal Engine 4.</p>
            <p>My hypothesis with the texture mapping seemed linked to OpenGL and how it imports models from Autodesk 3ds Max. The model appeared to have some sections of the mesh incorrectly formatted and thus inverted; rendering the image on both sides revealed a misaligned chunk of the texture.</p>
            <p>Below is a demonstration of the sine function, providing a basis for the texture generation; by aligning a coefficient of the sine function to the progression of time, we can see the texture begins to iterate through variations through the underlying Perlin noise.</p>
            <p><strong><span >Video: Sine wave testing</span></strong></p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/imOZ9gtBvSs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p ><em>Created with: C/C++, OpenGL, DirectX and Unreal Engine 4</em></p>
            <hr />
            <p ><em>Created by Alan Davies, 2016.</em></p>
            <p ><em>Supervised by Paul Angel &amp; Carl Jones (2016, University of South Wales).</em></p>
            <hr />
            <Link className="project__return-link" href="../projects#procedural_material_generation"> Return </Link>
        </div>
    </>
}

