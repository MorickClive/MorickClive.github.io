'use client'

import { useState } from "react";

type Params = {
    height: string
    imgList: Array<string>
}

export default function Carousel({ height, imgList }: Params) {
    const [activeIndex, setActiveIndex] = useState(0);

    function moveActiveIndex(value: number) {
        const result = value + activeIndex;

        if (result >= 0 && result <= imgList.length - 1) {
            setActiveIndex(result);
        } else {
            setActiveIndex(result > imgList.length - 1 ? 0 : imgList.length - 1);
        }
    };

    return <div className="carousel" >
        <div className="carousel__gallery" style={{ "height": height }}>
            <button className="carousel__button carousel__button--forward" onClick={() => moveActiveIndex(1)} >&#8658;</button>
            <button className="carousel__button carousel__button--back" onClick={() => moveActiveIndex(-1)} >&#8656;</button>
            <ul style={{ "height": height, "transform": `translate(-${activeIndex * 100}%)` }}>
                {imgList.map(
                    img => {return <li key={img} title="Open in tab" className="carousel__slide" ><a href={`${img}`} target="_blank"><img src={`${img}`} alt={"Preview Image"} /></a></li> }
                )}
            </ul>
        </div>
        <div className="carousel__nav">
            {imgList.map((img, index) => {
                return <button key={img} title={`Image [${index+1}/${imgList.length}]`} className={"carousel__nav--pip".concat(index == activeIndex ? " current" : "")} onClick={() => setActiveIndex(index)} ></button>
            })}
        </div>
    </div>;
}