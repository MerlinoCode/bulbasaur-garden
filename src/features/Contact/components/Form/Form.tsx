import React from "react";
import Title from "@/src/components/Title";
import InputForm from "./InputForm";

interface props{
    title: string;
}

const Formulary : React.FC<props> = ({title}) => {
    return(
        <div className="form-content">
            <Title text={title} type='medium' border={false} center={true}/>
                <form className="bg-orange-900">
                    <InputForm id="name" type="text" text='Nombre y Apellido'/>
                    <InputForm id="mail" type="mail" text='Dirección de Email'/>
                    <InputForm id="phone" type="text" text='Número de Celular'/>
                    <InputForm id="ticket" type="number" text='Número de Tickets'/>
                    <input className="button-form" type="submit" value="Enviar"/>
                </form>
        </div>
    )
}

export default Formulary;