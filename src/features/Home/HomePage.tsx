import Presentation from "./components/Presentation";
import InfoCard from "./components/InfoCard";
import Title from "@/src/components/Title";

export function HomePage() {
    return (
        <div className="flex items-center justify-center">
            <main className="flex w-full max-w-3xl flex-col justify-between sm:items-start mt-6 px-8">
                <Presentation title="El Jardín de Bulbasaur" desc="Ven a visitiar el primer y único atractivo turístico Hecho por fans y para fans de pokemon!"/>
                <div className="mt-8">
                    <Title text='Bienvenido!' type='large' border={true}/>
                    <InfoCard logo="airport" desc="Ven a un mundo de maravillas naturales y serenidad en el Jardín de Roserade, un renombrado atractivo turístico que cautiva los corazones de millones de personas."/>
                </div>
            </main>
        </div>
    );
}