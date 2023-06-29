import getImageGallery from "@/lib/getImageGallery";
import CreateCarousel from "@/lib/imageCarousel";
import Link from "next/link";

export default function project() {

    return <>
        <div className="container">
            <h2>Team Project: Assassin's Shadow</h2>
            <hr />
            <h4>Summary:</h4>
            <p>A module in university based around working to create a computer game with a group of programmers (1st year university work).</p>
            <p><em>Created with: C, GML(Game Maker Language), Adobe flash, <em>GNU Image Manipulation Program</em>. </em></p>
            <hr />
            <h4>About:</h4>
            <p>This project was a programmer only team, here I implemented the graphics for the menu, projectile art and props for level 2; each level was a different team members task to complete as part of the assignment.</p>
            <p>I implemented the bouncing of the weapon projectile, there was also an issue of the game appearing to be very easy to beat if the player merely spammed the projectile, so I capped the firing rate of the weapon to around 3-4 projectiles, each projectile slowly regenerates to the capacity of 4 over time.</p>
            <p>A bonus feature in level 2 includes water patches that apply a condition that slows the player down, there are also collision masks on rock formations that respond to both the player and weapons.</p>
            <p>I also experimented with lighting in the final level after discussion with the creator, trying to add a level of ambient lighting from city lights and fires.</p>
            <hr />
            <h4>Final Scenes</h4>
            <hr />
            <p>- pending image gallery -</p>
            <h4>Download</h4>
            <hr />
            <p>- pending available link -</p>
            <hr />
            <p><em>Project created by Project Team*, 2013-2014.</em></p>
            <p><em>Module Lecturer: Mike Reddy (University of South Wales)</em></p>
            <p><em>Project Team: Alan Davies, L. Haskins, J.Palmer, A. Miah, D. Kelly</em></p>
            <hr />
            <Link className="project__return-link" href={`../projects#assassins_shadow`}>[ return ]</Link>
        </div>

        <div className="container">
            <h2>Image Gallery</h2>
            <hr className='mainTitle' />
            <CreateCarousel height="500px" imgList={getImageGallery("assassins_shadow")} />
        </div>
    </>
}