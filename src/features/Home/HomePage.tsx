import Title from "@/src/components/Title";

export function HomePage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <main className="flex min-h-screen w-full max-w-3xl flex-col justify-between sm:items-start mt-6 px-8">
                <Title text="Inicio" type='xLarge' border={true}/>
            </main>
        </div>
    );
}