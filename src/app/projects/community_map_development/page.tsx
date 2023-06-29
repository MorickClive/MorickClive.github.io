import getImageGallery from "@/lib/getImageGallery";
import CreateCarousel from "@/lib/imageCarousel";
import Link from "next/link";

export default function project() {

    return <>
        <div className="container">
            <h2>Command & Conquer: Community Map Development</h2>
            <hr />
            <h4>Summary:</h4>
            <p>Maps developed for the Command &; Conquer<em>™ </em>: Red Alert<em>™ </em>3 community. Some maps involving heavy scripting and level design considerations, I released these maps under the name “Tiberian Fiend” and achieved three spot lights by EA back when the community was active.</p>
            <hr />
            <h4>About:</h4>
            <p>Before reaching university, my inspiration and motivation to develop video games spanned from my time after school and college. I would develop content that presented me an opportunity to create content for games I played, prolonging their life span and quality.</p>
            <p>In time I started to produce high quality maps with persistent study, even looking into the creation of mods and development for the Command and Conquer series. Under the name “Tiberian Fiend” (A Command and Conquer reference to Tiberian Sun) I published content for the wider community on sites like <a href="https://www.ppmsite.com/" target="_blank" >Project Perfect Mod</a> and <a href="https://www.cnclabs.com/maps/" target="_blank" >CnC labs</a>, as I created more content I found myself thoroughly enjoying level design and scripting.</p >
            <p>After submitting and reviewing the feedback of each map, I felt compelled to create more – expanding my knowledge of the community tool to its limits. This entire experience gives me a huge appreciate for the difficulties of level design and game development, a benefit of a tool such as the world build provides a limit, but knowing the key components of game design has further boosted my capability in planning and developing games.</p>
            <hr />
            <h4>Final Scenes</h4>
            <hr />
            <h4>  <u>Competition winner</u></h4>
            <p>As part of my creation efforts I entered a contest with “CnCMaps.com”, creating the map “Battle Base Koi” as my entry and succeeding at reaching first place. This contest was also highlighted by EA and included prizes by EA themselves for success: the rewards included two t-shirts, 1 Scrin mug and a signed autograph by Ric Flair (of which can be viewed below).</p>
            <p><strong>Other successful entries</strong></p>
            <p>In total, I received three spotlights from EA and create many maps in my spare time. Though this maybe considered just level design, I also created maps that redefined game modes and scripted new ones with their own success conditions. One of these scripted maps is known as Assassin’s Shadow and was also one of the maps that was highlighted by EA.</p>
            <hr />
            <h4><strong>Links</strong></h4>
            <ul>
                <li><a href="https:www.cnclabs.com/forums/default.aspx?g=posts&t=9040" target="_blank" >CnCLabs Forum post "<b>Battlebase Koi</b>"</a></li>
                <li><a href="https:www.cnclabs.com/forums/default.aspx?g=posts&t=9015" target="_blank" >CnCLabs Forum post "<strong>A Place in the Heavens</strong>"</a></li>
            </ul>
            <hr />
            <p><em>Created with: Command &; Conquer™: Red Alert™  3 World Builder, (Tool set provided by EA)</em></p>
            <p><em>Created by: Alan Davies(Tiberian Fiend), 2007-2010.</em></p>
            <hr />
            <p><em>Disclaimer:<br />I do not claim to own any part of Command and Conquer Red Alert 3, all assets/engine code belong to their respective owners. These projects were built purely for the benefit of the Red Alert 3 community from publicly available tool sets.<br /><br />If you own this material and wish it removed please <a href="../contact/">contact</a> me.</em></p>
            <hr />
            <Link className="project__return-link" href={`../projects#community_map_development`}>[ return ]</Link>
        </div>
        <div className="container">
            <h2>Image Gallery</h2>
            <hr className='mainTitle' />
            <CreateCarousel height="500px" imgList={getImageGallery("community_map_development")} />
        </div>
    </>
}