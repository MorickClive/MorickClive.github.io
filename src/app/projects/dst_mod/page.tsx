import getImageGallery from "@/lib/getImageGallery";
import Carousel from "@/lib/imageCarousel";
import Link from "next/link";

export default function project() {

    return <>
        <div className="container project">
            <h2>Mod: Warrick the Afflicted, Don't Starve Together</h2>
            <hr />
            <h4>Summary:</h4>
            <p>Back in 2017, I was on the other side of university but also seeking my first role after graduating.</p>
            <p>During this time I was balancing my day between maintaining my technical skills and enjoying some down time on some of my favourite computer games. Being inspired by my capability to develop on game engines always merges both my passion for my gaming with my technical competence.</p>
            <hr />
            <h4>About:</h4>
            <p>Part of the game Don't Start Together is an expanded multiplayer release of the earlier title Don't Starve, an generated world where the player must avoid death by ensuring their hunger, sanity and health meters are managed whilst overcoming obstacles in the world set againest them.</p>
            <p>One of the challenges of this game is the balance of remaining alive and managing a sanity drain effect, this would allow shadow manifestations to harm the player if their sanity is low enough.<br />I wanted to create a new character with perks that enabled faster exploration at the requirement of low sanity to gain additional movement speed. </p>
            <p>Don't Starves main characters all have drawbacks as well as benefits that make surviving a unique experience, with this in mind I decided to split the character into the following features/rules </p>
            <ul><li>Group Perk: can craft obelisks that provide useful aura effects</li>
                <li>Individual Perk: moves faster when closer to insanity</li>
                <li>Drawback: sanity consistently falls</li>
            </ul>
            <p>Whilst this character has been a success and released with custom art and coding solutions, I found a job opportunity towards summer that then put this project on the backshelf in terms on maintaince.</p>
            <div className="flex center" >
                <h3>Image Gallery</h3>
                <hr />
                <Carousel height="300px" imgList={getImageGallery("dst_mod")} />
                <hr />
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=935464768" target="_blank" > [ Steam Workshop: Warrick the Afflicted ] </a >
                <hr />
            </div>
            <p><em>Created with:<br />LUA, XML, Don't Starve Mod Tools.<br />Testing Tool: Don't Starve Together Dedicated Server.&nbsp;</em></p>
            <hr />
            <Link className="project__return-link" href={`../projects#dst_mod`}> return </Link>
        </div>
    </>
}