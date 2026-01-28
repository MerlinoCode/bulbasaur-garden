import React from "react";
import Title from "@/src/components/Title";
import InputForm from "./InputForm";
import SendButton from "../SendButton";

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
                    <InputForm id="message" type="textarea" text='Deje su mensaje'/>
                    <SendButton text="ENVIAR" btnType="submit"/>
                </form>
        </div>
    )
}

export default Formulary;