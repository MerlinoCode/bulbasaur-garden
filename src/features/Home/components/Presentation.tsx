import React from "react";
import Title from "@/src/components/Title";
import Image from 'next/image';

interface props {
    title: string;
    desc: string
}

const Presentation: React.FC<props> = ({ title, desc }) => {
    return (
        <div>
            <div className="flex justify-center">
                <Title text={title} type='xLarge' border={true} />
            </div>
            <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr] gap-4">
                <p className="text-white text-center m-auto">{desc}</p>
                <Image className="justify-center" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' alt="Bulbasaur" width={200} height={200} />
            </div>
        </div>
    )
}

export default Presentation;