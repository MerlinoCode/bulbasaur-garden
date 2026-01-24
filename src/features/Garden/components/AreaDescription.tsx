import React from "react";
import Image from 'next/image';
import Title from "@/src/components/Title";

interface props{
    desc: string;
    image: string;
    title?: string;
    border?: boolean
}

const AreaDescription : React.FC<props> = ({desc, image, title, border}) => {
    return(
        <div>
            <Title text={title ? title : ''} type='medium' border={border ? true : false}/>
            <p className="text-white">{desc}</p>
            <div className="mb-8 mt-4">
                <Image src={image} alt="image description" width={500} height={300}/>
            </div>
        </div>
    )
}

export default AreaDescription;