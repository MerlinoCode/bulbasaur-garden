import React from "react";
import Image from 'next/image';
import { default as airport } from '../assets/airport.svg';
import { default as landscape } from '../assets/landscape.svg';
import { default as magicHat } from '../assets/magicHat.svg';

interface Props {
    desc: string;
    logo: string;
}

const InformationCard: React.FC<Props> = ({ desc, logo }) => {
    const getContent = () => {
        switch (logo) {
            case 'airport':
                return {
                    icon: airport,
                    title: "Un Viaje Soñado",
                    color: "from-blue-400 to-indigo-600"
                };
            case 'landscape':
                return {
                    icon: landscape,
                    title: "Magnífico Paisaje",
                    color: "from-emerald-400 to-teal-600"
                };
            case 'magicHat':
                return {
                    icon: magicHat,
                    title: "Momentos Inspiradores",
                    color: "from-purple-400 to-pink-600"
                };
            default:
                return null;
        }
    };

    const content = getContent();
    if (!content) return null;

    return (
        <div className="group bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/60 relative overflow-hidden">
            {/* Background Accent Glow */}
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500`} />

            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="p-4 bg-zinc-800/50 rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <Image src={content.icon} alt={content.title} width={48} height={48} className="filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>

                <h2 className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${content.color} tracking-tight`}>
                    {content.title}
                </h2>

                <p className="text-zinc-400 font-medium leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default InformationCard;