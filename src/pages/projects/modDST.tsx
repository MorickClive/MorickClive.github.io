import getImageGallery from "../../../components/getImageGallery";
import Carousel from "../../../components/imageCarousel";
import { Link } from "react-router-dom";

export default function DSTMod() {

    return <div className="container project">
            <h2>Mod: Warrick the Afflicted, Don't Starve Together</h2>
            <hr />
            <p>Whilst seeking my first role after graduating, I began exploring ways to incorporate my passion for coding with my gaming.</p>
            <p>During this time, I was exploring ways to balance my day between maintaining my technical skills and enjoying some downtime on some of my favourite computer games.</p>
            <hr />
            <h4>About:</h4>
            <p>Part of the game “Don't Start Together” is a multiplayer release of the earlier title “Don't Starve”, a generated world where players must avoid death by ensuring their hunger, sanity and health meters whilst overcoming obstacles and organising their resources to ensure progression.</p>
            <p>One of the challenges of this game is the balance of remaining alive and managing a sanity drain effect; this would allow shadow manifestations to harm the player if their sanity is low enough.
                I wanted to create a new character with perks that enabled faster exploration at the requirement of low sanity to gain additional movement speed.</p>
            <p>Don't Starve main characters all have drawbacks but also benefits that make surviving a unique experience. Using the design philosophy for existing character choices, I created the following qualities to help create a distinct character and playstyle.</p>
            <ul>
                <li>Group Perk: can craft obelisks that provide beneficial auras</li>
                <li>Individual Perk: moves faster when closer to insanity</li>
                <li>Drawback: sanity consistently falls</li>
            </ul>
            <p>Part of my reason for focusing on movement speed as a perk was the value of exploration; with a larger area of the map uncovered and valuable resources located, the player can make more informed decisions when deciding to gather food or specific materials. The perk balanced out as the cost of this ability is the difficulty to survive; due to the shadow creatures that attack players at low sanity.</p>
            <div className="flex center" >
                <h3>Image Gallery</h3>
                <hr />
                <Carousel height="300px" imgList={getImageGallery("dst_mod")} />
                <hr />
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=935464768" target="_blank" > [ Steam Workshop: Warrick the Afflicted ] </a >
                <hr />
            </div>
            <p>Experienced players might view the lower sanity as a perk; shadow creatures that appear can drop material that is unique to them. Additionally, low sanity is desirable to move past blockades or avoid the antithesis of these creatures: “gestalts”, which spawn with moon-related content.</p>
            <p>Whilst this character has been a success and released with custom art and coding solutions, I found a job opportunity towards summer that placed this project on the back shelf; this meant I was unfortunately unable to maintain this project.</p>
            <hr />
            <p><em>Created with:<br />LUA, XML, Don't Starve Mod Tools.<br />Testing Tool: Don't Starve Together Dedicated Server.&nbsp;</em></p>
            <hr />
            <Link className="project__return-link" href={`../projects#dst_mod`}> Return </Link>
        </div>
}