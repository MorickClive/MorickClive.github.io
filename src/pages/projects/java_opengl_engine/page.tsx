import getImageGallery from "../../../components/getImageGallery";
import Carousel from "../../../components/imageCarousel";
import { Link } from "react-router-dom";

export default function JavaOpenEngine() {

    return <>
        <div className="container project">
            <h2>OpenGl Java Project: 3D Game Engine</h2>
            <hr />
            <p>This project is my translation of C++ programming depth from my University experience, exploring the implications of using rendering and shader techniques in Java.</p>
            <hr />
            <h4>About:</h4>
            <p>This project uses OpenGL, a library known as "Lightweight Java Game Library" or LWJGL;  this library is supported by "Slick-Util" to help manage sounds and images. I aimed to implement real-time rendering techniques that help create 3D environments, respecting lighting from both global and point sources.</p>
            <p>Whilst it seems like a simple objective, the creation, injection and lighting of 3D models can present some challenges, reading of external files, management of shader pipeline as well as camera implementation for navigation. I've attached some images below to showcase the results.</p>
            <hr />
            <div className="flex center" >
                <h4>Image Gallery</h4>
                <hr />
                <Carousel height="400px" imgList={getImageGallery("java_opengl_engine")} />
            </div>
            <hr />
                <p><em>Dragon model credit: Stanford University Dragon model</em></p >
            <hr />
            <p>On reflection after industry, I see areas where this project could improve implementation to support maintainability. Unfortunately, this project suffers from a concrete dependency on a Jar that is no longer available; much of the vector maths and texture processors depend on this library.</p>
            <p>Writing code exclusively dependent on the C++ redistributable libraries in university; my training with QA Ltd has shown me Apache Maven, a build tool that helps manage and control the respective versioning of dependencies. Using Maven has shaped my future Java development, particularly as my time with code maintenance with a client has shown the impact of long-term maintainability when using such a build tool.</p>
            <p>The state of this particular project has presented a block in maintaining it; however, the value of creating this project served a valuable purpose - exploring Java and implementing real-time rendering techniques in a newly introduced programming language.</p>
            <hr />
            <Link className="project__return-link" href={`../projects#java_opengl_engine`}> Return </Link>
        </div>
    </>
}