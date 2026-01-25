import Title from "@/src/components/Title";
import Form from "./components/Form/Form";

export function ContactPage() {
    return (
        <div className="flex items-center justify-center">
            <main className="flex w-full max-w-3xl flex-col justify-between sm:items-start mt-6 px-8">
                <Title text="Contacto" type='xLarge' border={true} center={true}/>
                <Form title='DEJANOS TU MENSAJE'/>
            </main>
        </div>
    );
}