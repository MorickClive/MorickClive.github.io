import getImageGallery from "@/lib/getImageGallery";
import CreateCarousel from "@/lib/imageCarousel";
import Link from "next/link";

export default function project() {

    return <>
        <div className="container">
            <h2>OpenGl Java Project: 3D Game Engine</h2>
            <hr />
            <h4>Summary:</h4>
            <p>In my translation of Java skills from my studies of C++ in university, exploring the implications of using rendering and shader techniques.</p>
            <hr />
            <h4>About:</h4>
            <p>This project uses OpenGL, a library known as "Lightweight Java Game Library" or LWJGL, this library is supported by "Slick-Util" to help manage sounds and images. The aim of this project was to implement common real-time rendering techniques that help create a 3D enviroments, respecting lighting from both global and point sources.</p>
            <p>Whilst it seems like a simple objective, the creation, injection and lighting of 3D models can present some challenges, reading of external files, management of shader pipeline as well as camera implementation for navigation. I've attached some images below to showcase the results.</p>
            <hr />
            <h4>Sample Images</h4>
            <p>Initial Scene:</p>
            <a href="/img/projects/game_engine/render_scene.jpg" target="_blank"><img src="/img/projects/game_engine/render_scene.jpg" width="450" height="267" /></a >
            <p>Point Light & Ambient Lighting:</p>
            <a href="/img/projects/game_engine/light_point.jpg" target="_blank"><img src="/img/projects/game_engine/light_point.jpg" width="450" height="267" /></a>
            <p> Day Skybox:</p >
            <a href="/img/projects/game_engine/skybox_day.jpg" target="_blank"><img src="/img/projects/game_engine/skybox_day.jpg" width="450" height="267" /></a >
            <p> Night Skybox:</p >
            <a href="/img/projects/game_engine/skybox_night.jpg" target="_blank"><img src="/img/projects/game_engine/skybox_night.jpg" width="450" height="267" /></a>
            <p> Dragon model credit: Stanford University Dragon model</p >
            <a href="/img/projects/game_engine/stanford_uni_shaderdragon.jpg" target="_blank"><img src="/img/projects/game_engine/stanford_uni_shaderdragon.jpg" width="450" height="267" /></a>
            <p> Dragon model credit: Stanford University Dragon model</p >
            <hr />
            <p>On reflection after industry, I can definitely see areas where this project could be made more maintainable - sadly this project suffers from a concrete dependency on a Jar that is no longer available, this drove a lot of the vector mathematics as well as texture loaders. This has presented a block on returning to this project, but the value from creating this project served an important purpose; exploring Java and implementing real-time rendering techniques in a newly introduced programming language.</p>
            <hr />
            <h4>Final Scenes</h4>
            <hr />
            <p>- pending image gallery/carousel -</p>
            <hr />
            <Link className="project__return-link" href={`../projects#java_opengl_engine`}>[ return ]</Link>
        </div>
        <div className="container">
            <h2>Image Gallery</h2>
            <hr className='mainTitle' />
            <CreateCarousel height="500px" imgList={getImageGallery("java_opengl_engine")} />
        </div>
    </>
}