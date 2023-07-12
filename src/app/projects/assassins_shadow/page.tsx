import getImageGallery from "@/lib/getImageGallery";
import Carousel from "@/lib/imageCarousel";
import Link from "next/link";

export default function project() {

    return <>
        <div className="container project">
            <h2>Team Project: Assassin's Shadow</h2>
            <hr />
            <p>This project was a module in the first year of the degree; the objective was to create a computer game with a group of programmers (1st year university work), exploring the difficulties of project development in a team setting.</p>
            <h4>About:</h4>
            <hr />
            <p>I and four others formed a group to create a computer game using the Gamemaker engine/toolset. Based on group-generated ideas, we decided to use the concept from one of my custom Command & Conquer script maps providing a loose basis for the rules and aesthetic of the game.</p>
            <p>Each member was assigned to create an aspect of the game and merge it; these included such assignments as enemies, player goals, and movement. Each team member was also responsible for creating a single level that the player could explore.</p>
            <p>Some of the responsibilities I was assigned were:</p>
            <ul>
                <li>Implementing the menu system.</li>
                <li>Creating player projectile mechanics.</li>
                <li>Map creation: Level 2.</li>
                <li>Various props and art assets.</li>
            </ul>
            <p>One of the challenges I faced when implementing the weapon projectile was the game being very easy to beat if the player merely spammed the weapon key.</p>
            <p>I decided to cap the firing rate to limited ammunition; each projectile slowly regenerates to the capacity of 4 throwing stars. The effect meant the player would have to wait for ammunition regeneration, preventing them from firing a stream of endless fire.</p>
            <p>I was responsible for the creation of the second level, having the opportunity to explore how some of the props I created could have conditional effects; the effects I decided on using were:</p>
            <ul>
                <li>Water patches; applying a condition that slows the player movement.</li>
                <li>Custom collision masks on props to both the player and projectile weapons.</li>
            </ul>
            <p>As part of a collaboration with the level designer, I assisted with lighting in the final level, adding ambient lighting from city lights and fires. It was a fantastic opportunity to see how the game could develop if we had more time to pursue development.</p>
            <h4>Final Scenes:</h4>
            <hr />
            <Carousel height="400px" imgList={getImageGallery("assassins_shadow")} />
            <hr />
            <p><em>Created with: C, GML(Game Maker Language), Adobe Flash, GNU Image Manipulation Program.</em></p>
            <hr />
            <p><em>Project created by Project Team*, 2013-2014.</em></p>
            <p><em>Module Lecturer: Mike Reddy (University of South Wales)</em></p>
            <p><em>Project Team: Alan Davies, L. Haskins, J.Palmer, A. Miah, D. Kelly</em></p>
            <hr />
            <Link className="project__return-link" href={`../projects#assassins_shadow`}> Return </Link>
        </div>
    </>
}