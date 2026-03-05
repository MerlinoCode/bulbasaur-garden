import React from "react";
import Image from 'next/image';

interface Props {
    desc: string;
    image: string;
    title?: string;
    reverse?: boolean; // New prop for alternating layout
}

const AreaDescription: React.FC<Props> = ({ desc, image, title, reverse = false }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-14 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[3rem] p-6 md:p-12 shadow-2xl relative group overflow-hidden transition-colors duration-500 hover:bg-zinc-900/60`}>
            {/* Thematic Background Glow */}
            <div className={`absolute top-1/2 ${reverse ? 'left-1/4' : 'right-1/4'} w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            {/* Image Container */}
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl shrink-0 border border-white/10 relative">
                <div className="w-full aspect-[4/3] relative group-hover:scale-105 transition-transform duration-700">
                    <Image
                        src={image}
                        alt={title || "Garden Area"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6 relative z-10 px-2 md:px-0 text-center md:text-left">
                {title && (
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
                        {title}
                    </h2>
                )}
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default AreaDescription;