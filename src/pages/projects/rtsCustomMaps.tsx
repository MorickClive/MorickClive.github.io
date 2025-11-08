import getImageGallery from "../_components/projects/getImageGallery";
import Carousel from "../_components/projects/imageCarousel";
import { Link } from "react-router-dom";

export default function CommunityMapDevelopmentProject() {

    return <>
        <div className="container project">
            <h2>Command & Conquer: Community Map Development</h2>
            <hr />
            <p>Maps developed for the "Command & Conquer: Red Alert"™ 3 community.</p>
            <p>Some maps involved heavy scripting and adapted the gameplay to deviate to a unique game mode rather than the standard player vs player format. Electronic Arts(EA) recognised and spotlighted my maps on their official website; one highlight was a first-place award in a mapping competition where I received official merchandise.</p>
            <p>These maps were released using my old online alias, “Tiberian Fiend”.</p>
            <hr />
            <h4>About:</h4>
            <p>Before reaching university, my inspiration and motivation to develop video games spanned from my time after school and college. I would create content for various video games I owned, allowing me to prolong their life span and quality.</p>
            <p>In time I started to produce high-quality maps with persistent study, even looking into the creation of mods and development for the Command and Conquer series. I published content for the community on sites like <a href="https://www.ppmsite.com/" target="_blank" rel="noopener" >Project Perfect Mod</a> and <a href="https://www.cnclabs.com/maps/" target="_blank" rel="noopener" >CnC labs</a>; upon each release, I began to find a passion for level design and scripting.</p >
            <p>After submitting and reviewing the feedback on each map, I felt compelled to create more - expanding my knowledge of the community tool to its limits. This entire experience gave me an appreciation for the difficulties of level design and game development; one of the benefits of the map-making tool included its flexibility beyond the existing maps that were officially available.</p>
            <p>Exploring map development and scripting helped boost my capability in planning and developing projects; it provided insight into the analysis, time management and the challenges of blockers related to project development.</p>
            <hr />
            <h4>Final Scenes</h4>
            <hr />
            <Carousel height="400px" imgList={getImageGallery("community_map_development")} />
            <hr />
            <h4><u>Competition winner</u></h4>
            <p>As part of my creation efforts, I entered a contest with “CnCMaps.com”, creating the map “Battle Base Koi” as my entry and succeeding in reaching first place. Sponsored by Electronic Arts in 2009, the contest included prizes by EA and included:</p>
            <ul>
                <li>Two branded t-shirts</li>
                <li>Scrin flask mug</li>
                <li>A signed autograph by Ric Flair.</li>
            </ul>
            <p><u>Other successful entries</u></p>
            <p>I received two additional spotlights from EA and created many maps in my spare time. Though this may be considered just level design, I also created maps that redefined game modes and scripted new ones with their success conditions. Assassin’s Shadow was of scripted maps that achieved a spotlight; it provided limited fighter creation and played on stealth themes from specialised ninja units. The map objective was to infiltrate enemy barracks without being seen, global abilities and alternate units to provide defensive capabilities.</p>
            <hr />
            <h4><strong>Links</strong></h4>
            <ul>
                <li><Link to="https:www.cnclabs.com/forums/default.aspx?g=posts&t=9040" target="_blank" >CnCLabs Forum post "<b>Battlebase Koi</b>"</Link></li>
                <li><Link to="https:www.cnclabs.com/forums/default.aspx?g=posts&t=9015" target="_blank" >CnCLabs Forum post "<strong>A Place in the Heavens</strong>"</Link></li>
            </ul>
            <hr />
            <p><em>Created with: "Command & Conquer: Red Alert™ 3 WorldBuilder"<br />Created by: Alan Davies(Tiberian Fiend), 2007-2010.</em></p>
            <hr />
            <p><em>Disclaimer:<br />I do not claim to own any part of Command and Conquer Red Alert 3, all assets/engine code belong to their respective owners. These projects were built purely for the benefit of the Red Alert 3 community from publicly available tool sets.<br /><br />If you own this material and wish it removed please <a href="../contact">contact</a> me.</em></p>
            <hr />
            <Link className="project__return-link" to={`../projects#community_map_development`}> Return </Link>
        </div >
    </>
}