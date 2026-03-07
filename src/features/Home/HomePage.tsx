"use client";
import Image from 'next/image';
import Presentation from "./components/Presentation";
import InfoCard from "./components/InfoCard";
import Link from 'next/link';
import BackToTopButton from "../Pokedex/components/BackToTopButton";

export function HomePage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Glow Orbs */}
            <div className="absolute top-0 right-1/4 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-150 h-150 bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            {/* Hero Header Section */}
            <div className="bg-zinc-900 border-b border-zinc-800 mb-12 shadow-lg relative overflow-hidden">
                {/* Thematic blue background glow effects moved inside for consistent intensity */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-8">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                            <div className="w-8 h-8 bg-white rounded-full border-4 border-zinc-900"></div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-400 to-indigo-600 tracking-[-0.02em] mb-6 drop-shadow-xl">
                        Bienvenido!
                    </h1>
                    <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                        Tu puerta de entrada al fascinante mundo Pokémon. Explora nuestra pokedex nacional y descubre el santuario floral más místico.
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 space-y-8 mb-0">
                {/* Stats Section - Added Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-800/50 bg-zinc-950/20 rounded-[3rem] backdrop-blur-sm">
                    <div className="text-center group">
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                        <div className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Pokémon</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">18</div>
                        <div className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Tipos</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">#001</div>
                        <div className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Favorito</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                        <div className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Diversión</div>
                    </div>
                </div>
                {/* Presentation Section */}
                <Presentation
                    title="¡Saludos!"
                    desc="Ven a visitar el primer y único atractivo turístico hecho por fans y para fans de Pokémon. Un espacio diseñado para la aventura, la paz y el descubrimiento."
                />

                {/* Main Navigation Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <Link href="/Pokedex" className="group relative block rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/30">
                        <div className="absolute inset-0 bg-linear-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-10 relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-4xl font-black text-white mb-4">Pokédex</h3>
                                <p className="text-zinc-400 text-lg font-medium max-w-xs">
                                    Consulta datos detallados, estadísticas y tipos de todos tus Pokémon favoritos.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center text-red-400 font-bold tracking-widest uppercase text-sm group-hover:translate-x-2 transition-transform">
                                Explorar ahora &rarr;
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity translate-x-1/4 translate-y-1/4 grayscale group-hover:grayscale-0 duration-700">
                            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Poke Ball" width={256} height={256} className="w-64 h-64" />
                        </div>
                    </Link>

                    <Link href="/Garden" className="group relative block rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30">
                        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-10 relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-4xl font-black text-white mb-4">El Jardín</h3>
                                <p className="text-zinc-400 text-lg font-medium max-w-xs">
                                    Pasea por el enigmático santuario de Bulbasaur y vive una experiencia sensorial única.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center text-emerald-400 font-bold tracking-widest uppercase text-sm group-hover:translate-x-2 transition-transform">
                                Visitar Jardín &rarr;
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700">
                            {/* Radiant green glow behind Bulbasaur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 group-hover:animate-glow-pulse transition-opacity duration-700" />

                            {/* Star Particles - Only visible on hover */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-star" style={{ '--tw-translate-x': '-60px', '--tw-translate-y': '-80px' } as React.CSSProperties} />
                                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-star [animation-delay:0.4s]" style={{ '--tw-translate-x': '70px', '--tw-translate-y': '-60px' } as React.CSSProperties} />
                                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-star [animation-delay:0.8s]" style={{ '--tw-translate-x': '-40px', '--tw-translate-y': '70px' } as React.CSSProperties} />
                                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-star [animation-delay:1.2s]" style={{ '--tw-translate-x': '80px', '--tw-translate-y': '40px' } as React.CSSProperties} />
                            </div>

                            <Image
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                                alt="Bulbasaur"
                                width={256}
                                height={256}
                                className="w-64 h-64 relative z-10 opacity-10 group-hover:opacity-100 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 filter group-hover:drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]"
                            />
                        </div>
                    </Link>
                </div>

                {/* Experience Highlights - More Details */}
                <div className="relative">
                    {/* Decorative glow behind the highlights */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-teal-500/5 rounded-full blur-[100px] -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
                                Una Experiencia <span className="text-blue-500 underline decoration-indigo-500/30 underline-offset-8">Multisensorial</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Gráficos de Alta Fidelidad", desc: "Disfruta de ilustraciones oficiales en alta resolución de cada Pokémon." },
                                    { title: "Búsqueda Instantánea", desc: "Encuentra cualquier Pokémon en milisegundos con nuestro motor optimizado." },
                                    { title: "Diseño Responsivo", desc: "Lleva tu aventura en el bolsillo con una interfaz móvil perfectamente adaptada." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                            <p className="text-zinc-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square bg-zinc-900 border border-white/5 rounded-[3rem] overflow-hidden flex items-center justify-center p-12 group">
                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
                                    alt="Master Ball"
                                    width={192}
                                    height={192}
                                    className="w-48 h-48 filter drop-shadow-2xl group-hover:rotate-12 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nossa Visión Section - Migrated from Contact */}
                <div className="p-10 md:p-16 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[4rem] relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />

                    <div className="relative z-10 max-w-4xl">
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                            Nuestra <span className="text-blue-500">Visión</span>
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-medium text-xl md:text-2xl mb-10">
                            Bulbasaur Garden nació como un refugio digital para coleccionistas y amantes de la naturaleza Pokémon. Nuestra misión es proporcionar la base de datos más estética y funcional, facilitando el descubrimiento de cada espécimen en un entorno visualmente relajante y premium.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {["Creatividad", "Comunidad", "Diversión", "Excelencia", "Único"].map((tag) => (
                                <span key={tag} className="px-6 py-3 bg-blue-500/10 text-blue-400 rounded-full text-sm font-black uppercase tracking-widest border border-blue-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Information Grid */}
                <div className="pt-24 border-t border-zinc-800">
                    <h2 className="text-center text-3xl font-black text-zinc-500 uppercase tracking-[0.3em] mb-16">
                        Información Adicional
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoCard logo="airport" desc="Ven a un mundo de maravillas naturales y serenidad en el Jardín de Bulbasaur, un santuario que cautiva los corazones de millones." />
                        <InfoCard logo="landscape" desc="Situado en el corazón de la ciudad, este impresionante santuario promete un viaje sensorial a través de paisajes meticulosamente cuidados." />
                        <InfoCard logo="magicHat" desc="Descubra la magia de la naturaleza mientras se adentra en un reino de encanto y tranquilidad. Ideal para disfrutar con toda la familia." />
                    </div>
                </div>
            </main>

            <BackToTopButton theme="blue" />
        </div>
    );
}