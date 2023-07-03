import getImageGallery from "@/lib/getImageGallery";
import CreateCarousel from "@/lib/imageCarousel";
import Link from "next/link";

export default function project() {

    return <>
        <div className="container project">
            <h2>Team Project: Destruct Droid</h2>
            <hr />
            <h4>Summary:</h4>
            <p>A module in university based around multi-disciplined team work to create a computer game together (3rd year university work).</p>
            <hr />
            <h4>About:</h4>
            <p>During this project I was part of a team that focused on the engine aspect of implementation. We would handle any of the code specific aspects of the game, each member of the programmer team would have a duty assigned to us to aid in the completion of the project. In addition to the programmer team, we had an artist team that comprised of thr /ee artists; a management team, who moderated over progress; the design team, who designed the game concept and objectives.</p>
            <p>I was part of the programming team that handled communications with the artist team, I would ensure that all their assets would make it into the engine and correctly scaled on import. this would involve heavy communication and software experience to correctly manage the assets.</p>
            <p>I focused on creating material effects to increase the visual impact of different game features, this included visual effect shields, shaders on textures (for reflective properties on windows etc) and level design.</p>
            <p>Near the release of the project for the assignment there were multiple tasks falling to each member, we ended up with considerable numbers of building models but only two Robot models and one tank model(which was far too small to use and scaled incorrectly).</p>
            <p>I crafted together a tank and helicopter model that aided as an enemy, working closely with James Evans; who worked with AI aspects of the game, ensuring that the tank was able to move its turret separately from the body(to aim for shooting). I incorporated some changes right at the end with the addition of menu graphics and newly linked menu screens (Customise and Options) for the final release.</p>
            <hr />
            <h4>Final Scenes</h4>
            <hr />
            <CreateCarousel height="500px" imgList={getImageGallery("destruct_droid")} />
            <p><em>Created with: C/C++, 3DS Max, HLSL(Unreal Blueprint system).</em></p>
            <p><em><strong>Module Lecturer</strong>: Mike Reddy&nbsp;(University of South Wales)</em></p>
            <hr />
            <p><em><strong>Project team, 2015</strong></em></p>
            <p><em><strong>Programmers</strong>:&nbsp;Alan Davies, J. Reynolds, J. Evans, K. Pabari, H. Conibere and S. Skinner.</em></p>
            <p><em><strong>Artists team</strong>: S. Smith, various artists.</em></p>
            <p><strong>Design team</strong>: “JJ”, David, Rob</p>
            <hr />
            <Link className="project__return-link" href={`../projects#destruct_droid`}> return </Link>
        </div>
    </>
}