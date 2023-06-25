import Data from '../../../../public/data/blog.json'
import { BlogPost, BlogSection } from '../../../../types';

export default function GetPosts() {
    let Posts: Array<BlogPost> = Data;
    return Posts.map(post => parsePost(post));
}

function parsePost(post: BlogPost) {
    return <div id={post.mainTitle.toLowerCase().replaceAll(' ', '_')} className='card'>
        <div className="body">
            <h2 className="mainTitle">{post.mainTitle}</h2>
            {checkSection(post.intro)}
            {checkSection(post.body)}
            {checkSection(post.ending)}
            <p>Date Posted: {post.meta.date}</p>
        </div>
    </div>
}

function checkSection(section: BlogSection | null) {
    if (section !== null && section.content !== null) {
        return <>
            <h4 className="title">{(section.title !== null) ? section.title : "Section"}</h4>
            <div dangerouslySetInnerHTML={{__html: section.content}} />
            <div className="div page" />
        </>;
    }
    
    return <></>;
}