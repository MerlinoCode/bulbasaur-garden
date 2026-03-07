"use client";

import React from "react";
import Image from 'next/image';

interface Props {
    title: string;
    desc: string;
}

// Generate deterministic pseudo-random values based on seed
const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

const Presentation: React.FC<Props> = ({ title, desc }) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="w-full py-16 flex flex-col items-center">
            {/* Centered Hero Section */}
            <div
                className="relative mb-12 flex justify-center w-full group/bulba select-none"
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
                onTouchStart={() => setIsPressed(true)}
                onTouchEnd={() => setIsPressed(false)}
            >
                {/* Dramatic Outer Galaxy Glow (Hover) */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/10 rounded-full blur-[100px] opacity-0 group-hover/bulba:opacity-100 transition-all duration-1000 animate-pulse ${isPressed ? 'w-150 h-150 bg-emerald-400/20' : 'w-100 h-100'}`} />

                {/* Decorative Halo behind Bulbasaur */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400/30 rounded-full blur-[80px] animate-glow-pulse transition-all duration-300 ${isPressed ? 'w-96 h-96 opacity-100' : 'w-64 h-64 md:w-80 md:h-80'}`} />

                {/* Star Particles - Massively Enhanced Galaxy Spiral (Always visible during idle) */}
                <div className={`absolute inset-0 z-0 pointer-events-none opacity-40 group-hover/bulba:opacity-100 transition-opacity duration-1000 overflow-visible`}>
                    {mounted && [...Array(isPressed ? 60 : 32)].map((_, i) => {
                        const count = isPressed ? 60 : 32;
                        const seed = i * 1000 + (isPressed ? 5000 : 0);
                        const angle = (i / count) * Math.PI * 2 + (isPressed ? seededRandom(seed) * 0.5 : 0);
                        const baseDistance = isPressed ? 400 : 200;
                        const distance = baseDistance + seededRandom(seed + 1) * (isPressed ? 300 : 150);

                        const tx = Math.cos(angle) * distance + 'px';
                        const ty = Math.sin(angle) * distance + 'px';
                        const duration = ((isPressed ? 1.5 : 3) + seededRandom(seed + 2) * (isPressed ? 1 : 2)).toFixed(2) + 's';
                        const delay = isPressed ? (i * 0.03) + 's' : (i * 0.15) + 's';
                        const colors = ['bg-yellow-200', 'bg-white', 'bg-emerald-300', 'bg-teal-100', 'bg-amber-200', 'bg-cyan-200'];
                        const color = colors[i % colors.length];
                        const size = i % 4 === 0 ? 'w-2 h-2' : 'w-1 h-1';

                        return (
                            <div
                                key={`${i}-${isPressed}`}
                                className={`absolute top-1/2 left-1/2 ${size} ${color} rounded-full animate-galaxy mix-blend-screen shadow-[0_0_8px_white]`}
                                style={{
                                    '--tw-translate-x': tx,
                                    '--tw-translate-y': ty,
                                    '--star-duration': duration,
                                    '--star-scale': (isPressed ? 2 : 0.8) + seededRandom(seed + 3),
                                    '--star-rotate': (seededRandom(seed + 4) > 0.5 ? 1080 : -1080) + 'deg',
                                    animationDelay: delay
                                } as React.CSSProperties}
                            />
                        );
                    })}
                </div>

                <Image
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                    alt="Bulbasaur"
                    width={280}
                    height={280}
                    className={`relative z-10 filter drop-shadow-[0_0_40px_rgba(52,211,153,0.5)] cursor-pointer transition-all duration-300 group-hover/bulba:scale-110 group-hover/bulba:rotate-3 ${isPressed ? 'animate-intense-float scale-90 brightness-125' : 'animate-float'}`}
                />
            </div>

            <div className="text-center space-y-6 max-w-2xl px-4">
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-500 tracking-tight drop-shadow-sm">
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