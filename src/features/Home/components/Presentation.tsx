import React from "react";
import Image from 'next/image';

interface Props {
    title: string;
    desc: string;
}

const Presentation: React.FC<Props> = ({ title, desc }) => {
    return (
        <div className="w-full py-16 flex flex-col items-center">
            {/* Centered Hero Section */}
            <div className="relative mb-12 flex justify-center w-full">
                {/* Decorative Halo behind Bulbasaur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/20 rounded-full blur-[60px]" />

                <Image
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                    alt="Bulbasaur"
                    width={280}
                    height={280}
                    className="relative z-10 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] animate-float"
                />
            </div>

            <div className="text-center space-y-6 max-w-2xl px-4">
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 tracking-tight drop-shadow-sm">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default Presentation;