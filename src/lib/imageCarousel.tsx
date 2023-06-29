type Params = {
    height: string
    imgList: Array<string>
}

export default function CreateCarousel({ height, imgList }: Params) {
    const alTxt = "Sample Image";

    return <div className="carousel__wip" >
        <h3 className="carousel__wip--message" >Pending Implementation</h3>
        <div className="carousel" >
            <div className="carousel__gallery" style={{ "height": height }}>
                <button className="carousel__button carousel__button--forward" >&#8656;</button>
                <button className="carousel__button carousel__button--back" >&#8658;</button>
                <ul>
                    {imgList.map(img => { return <li key={img} className="carousel__slide"><a href={img} target="_blank"><img src={img} alt={alTxt} /></a></li> })}
                </ul>
            </div>
            <div className="carousel__nav">
                <button className="carousel__nav--pip current"></button>
                {imgList.map(img => { return <button key={img} className="carousel__nav--pip "></button> })}
            </div>
        </div>
    </div>;
}