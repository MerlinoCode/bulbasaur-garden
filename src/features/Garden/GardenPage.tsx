import AreaDescription from "./components/AreaDescription";
import BackToTopButton from "../Pokedex/components/BackToTopButton";

export function GardenPage() {
    const areas = [
        {
            title: "El Santuario Principal",
            desc: "Explora la esencia misma de la elegancia en nuestro exquisito \"Jardín de Bulbasaur\". Aquí, las rosas florecen en una sinfonía de colores y fragancias, creando un ambiente de serenidad y belleza. Pasea por caminos serpenteantes rodeados de hermosas flores y descubre la magia que solo Bulbasaur puede inspirar.",
            image: "https://images.unsplash.com/photo-1550948390-6eb7fa773072"
        },
        {
            title: "Laberinto de las Rosas",
            desc: "Adéntrate en el enigmático \"Laberinto de las Rosas\". Este laberinto floral es una maravilla de la naturaleza, donde la diversión y la aventura se entrelazan. Pierde la noción del tiempo mientras buscas el camino correcto y descubre sorpresas escondidas en cada esquina. ¡Un desafío que encantará a visitantes de todas las edades!",
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
        },
        {
            title: "Exhibición Pokémon",
            desc: "En nuestra \"Exhibición Pokémon,\" sumérgete en el emocionante mundo de Bulbasaur y otros Pokémon de la región. Descubre la historia, el arte y la cultura que rodean a estos seres mágicos. Desde raras cartas Pokémon hasta impresionantes ilustraciones, esta exhibición es una delicia para los fanáticos de todas las edades.",
            image: "https://images.unsplash.com/photo-1612454376902-577cd469d008"
        },
        {
            title: "Sesiones de Fotografía",
            desc: "Para los amantes de la fotografía, ofrecemos \"Sesiones de Fotografía\" únicas en el \"Jardín de Bulbasaur\". Los colores vibrantes y la belleza natural proporcionan el telón de fondo perfecto para capturar momentos inolvidables. Nuestros paisajes cautivadores son ideales para obtener imágenes impresionantes.",
            image: "https://images.unsplash.com/photo-1652039350038-3fb0eb6559bc"
        },
        {
            title: "Talleres de Jardinería",
            desc: "¿Te gustaría aprender los secretos de la jardinería? Únete a nuestros \"Talleres de Jardinería\" y descubre cómo cuidar de las rosas y las flores como un auténtico Entrenador Pokémon. Nuestros expertos en jardinería te guiarán en el arte de cultivar y mantener un jardín floreciente.",
            image: "https://images.unsplash.com/photo-1527863280617-15596f92e5c8"
        },
        {
            title: "Zona de Descanso",
            desc: "Nuestra \"Zona de Descanso\" es un remanso de tranquilidad en medio de la belleza natural. Disfruta de un tranquilo momento bajo la sombra de los árboles o siéntate en un banco rodeado de flores fragantes. Es el lugar perfecto para relajarte y disfrutar de la paz que solo el Jardín de Bulbasaur puede ofrecer.",
            image: "https://images.unsplash.com/photo-1510901340205-7769c0c19954"
        },
        {
            title: "Área de Picnic",
            desc: "Organiza un picnic inolvidable en nuestra \"Área de Picnic\". Rodeado de la belleza de la naturaleza y con amplias zonas verdes, este es el lugar perfecto para disfrutar de una comida al aire libre con amigos y familiares. ¡Convierte tu visita en una experiencia gastronómica en medio de un paraíso floral!",
            image: "https://images.unsplash.com/photo-1474899351970-ee05f7dd1334"
        },
        {
            title: "Mirador Escénico",
            desc: "Nuestro \"Mirador Escénico\" ofrece vistas panorámicas de todo el jardín. Sube a lo más alto y admira la belleza que te rodea. Es el lugar perfecto para tomar fotografías impresionantes y apreciar la magnificencia del jardín desde lo más alto.",
            image: "https://images.unsplash.com/photo-1532969058732-3615a226bbc2"
        },
        {
            title: "Área de Juegos para Niños",
            desc: "Los más pequeños encontrarán diversión ilimitada en nuestra \"Área de Juegos para Niños\". Toboganes, columpios y juegos interactivos harán que los niños se diviertan a lo grande mientras exploran el mundo de Bulbasaur.",
            image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 mb-20 shadow-lg relative overflow-hidden">
                {/* Thematic green background glow effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-8">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                            <div className="w-8 h-8 bg-white rounded-full border-4 border-zinc-900"></div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-600 tracking-[-0.02em] mb-6 drop-shadow-xl">
                        Jardín de Bulbasaur
                    </h1>
                    <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                        Un santuario natural donde la belleza floral y la magia Pokémon convergen. Creado en honor al #001.
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 relative mb-0">
                {/* Connecting background line linking the sections vertically */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 -z-10" />

                <div className="space-y-20 md:space-y-32">
                    {areas.map((area, index) => (
                        <AreaDescription
                            key={index}
                            title={area.title}
                            desc={area.desc}
                            image={area.image}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </main>

            <BackToTopButton theme="emerald" />
        </div>
    );
}