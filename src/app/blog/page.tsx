export default async function Blog() {
    return <div className='blogCards' >
        <div id="CnC_Maps" className='card'>
            <div className="body">


                <h2 className="mainTitle">First Post!</h2>
                <div className="div page"></div>
                <h4 className="title">Intro</h4>
                <p>Welcome to my blog section!</p>
                <p>My name is Alan Davies and this is my first blog post. <br />
                    Hopefully, this will be a way to keep track of developments and action plans.<br />I'm not very active on social media, so I fear I won’t be the best at writing in a blog-like format; despite this, I hope it will provide some useful insights!
                </p><p>
                    The objective of this section will mainly be to outline my developments, focuses and achievements as a software engineer.
                </p>
                <div className="div page" />
                <h4 className="title">What's About?</h4>
                <ul style={{ 'margin': '0em 3.5em' }}>
                    <li>[Home Page]</li>
                    <li>[Blog Page]</li>
                    <li>[Projects Page]</li>
                    <li>[About Page]</li>
                    <li>[Contact Page]</li>
                </ul>
                <p>Feel free to checkout the site and let me know if you have any feedback!</p>
                <div className="div page"></div>
                <p>Date Posted: 12/06/2023</p>
            </div>
        </div>

        <div id="dst_warrick" className='card'>
            <div className="body">
                <h2 className="mainTitle">Website Development</h2>
                <div className="div page"></div>
                <h4 className="title">Intro</h4>
                <p>Some of my collective projects sit in abandoned storage devices from my time around University; these projects remain catalogued in my mind but aren't available or outlined anywhere.</p>
                <p>I hope this site can aid in recording the development of new skills and interests in the future and provide access to some of my older projects.<br />
                    First, however, I'd like to outline the inspiration for the site theme.</p>
                <div className="div page" />
                <h4 className="title">Colour/Design Choice</h4>
                <br />
                <div className="imageBlock">
                    <div className='cardImage' style={{
                        "backgroundImage": "url('/img/blog/21-06-2023/theme-img.jpg')",
                        "width": "350px", "height": "250px"
                    }} />
                    <p>Designed around an art piece focusing on my Guild Wars 2 character: 'Aster', it explores silhouette themes with a limited colour palette. <br /><br />Due to the striking nature of the colour theme, it seemed reasonable to use it as a template for the site.</p>
                </div>
                <p>The intensity of colour/value on the left side of the background concerns me from a design perspective; the contrast disrupts the focus on the page, something I wish to avoid.</p>
                <p>Given that the character silhouette provided a balance of value that draws the attention between two points, the background is much darker on the right-hand side that might push viewers’ attention away from the main cards/articles of the page.</p>
                <p>In the future, I might make a different background or modify the current one; for now, it's a working template that allows the actualisation of the site - rather than existing as a concept exclusively.</p>
                <br />
                <div className="div page" />
                <h4 className="title">Where to now?</h4>
                <p>Part of designing this site is my focus on constructing the CSS, React/Typescript/Javascript, as well as migrating the whole site from a router-based package to Next.js</p>
                <p>Whilst I have designs for how the website should appear in paper documentation, I wish to get the content available and then begin adapting the site around the data available as a template.</p>
                <p>To maintain this website, I want to focus on main projects and blog posts as well as simplifying the addition of such articles. I'm outlining the following areas to work on:</p>
                <ul style={{ 'margin': '0em 3.5em' }}>
                    <li>Expanded Project pages</li>
                    <li>Image Galleries</li>
                    <li>Translate Blog posts & Project pages to JSON format</li>
                    <li>Add a footer in layout template (enabling global social media availability)</li>
                    <li>Refine CSS design</li>
                </ul>
                <p>I may not be continuously developing the site as I come from a Java/C++ background; however, I hope it becomes a good reference for my activities and achievements.</p>
                <div className="div page"></div>
                <p>Date Posted: 12/06/2023</p>
            </div>
        </div>

    </div>
}