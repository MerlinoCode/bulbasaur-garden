import React from "react";
import Title from "@/src/components/Title";
import InputForm from "./InputForm";
import SendButton from "../SendButton";

interface props {
    title: string;
}

const Formulary: React.FC<props> = ({ title }) => {
    return (
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Background Glow Detail */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-700" />

            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-10 tracking-tight">
                    {title}
                </h3>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputForm id="name" type="text" text='Nombre y Apellido' />
                        <InputForm id="mail" type="mail" text='Dirección de Email' />
                    </div>
                    <InputForm id="phone" type="text" text='Número de Celular' />
                    <InputForm id="message" type="textarea" text='Deje su mensaje' />
                    <SendButton text="ENVIAR MENSAJE" btnType="submit" />
                </form>
            </div>
        </div>
    )
}

export default Formulary;