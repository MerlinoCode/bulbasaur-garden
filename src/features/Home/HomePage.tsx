import Presentation from "./components/Presentation";
import InfoCard from "./components/InfoCard";
//import Title from "@/src/components/Title";

export function HomePage() {
    return (
        <div className="flex items-center justify-center">
            <main className="flex w-full max-w-3xl flex-col justify-between sm:items-start mt-6 px-8">
                <Presentation title="Bienvenido!" desc="Ven a visitiar el primer y único atractivo turístico Hecho por fans y para fans de pokemon!"/>
                <div className="mt-8 grid grid-cols-1 gap-6 w-full">
                    <InfoCard logo="airport"   desc="Ven a un mundo de maravillas naturales y serenidad en el Jardín de Roserade, un renombrado atractivo turístico que cautiva los corazones de millones de personas."/>
                    <InfoCard logo="landscape" desc="Situado en el corazón de Lorem Ipsum City, este impresionante santuario promete un viaje sensorial a través de paisajes meticulosamente cuidados y un oasis de flora de todo el mundo."/>
                    <InfoCard logo="magicHat"  desc="Descubra la magia de la naturaleza mientras se adentra en un reino de encanto y tranquilidad. Ideal para toda disfrutar con toda la familia. El jardín espera su llegada!"/>
                </div>
            </main>
        </div>
    );
}