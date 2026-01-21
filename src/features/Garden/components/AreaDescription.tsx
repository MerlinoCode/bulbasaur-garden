import React from "react";
import Image from 'next/image';
//import Title from "../Title/Title";

interface props{
    desc: string;
    id: string;
    image: string;
    title: string;
}

const AreaDescription : React.FC<props> = ({desc, id, image, title}) => {
    
    return(
        <div className="description" id={id}>
            <div className="area-title">
                {/*<Title text={title} type='medium-2' border={true}/>*/}
                <h2 className="text-white">{title}</h2>
            </div>
            <p className="text-white">{desc}</p>
            <div className="background-divisor"></div>
            <div className="image-wrapper">
                <Image className="photo" src={image} alt="image description" width={500} height={300}/>
            </div>
        </div>
    )
}

export default AreaDescription;