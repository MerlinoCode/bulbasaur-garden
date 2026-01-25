import React from "react";
import Image from 'next/image';
import { default as person } from './assets/Person.svg';
import { default as mail } from './assets/Mail.svg';
import { default as phone } from './assets/Phone.svg';
import { default as ticket  } from './assets/Ticket.svg';

interface props{
    id: string;
    text: string;
    type: string;
}

const InputForm : React.FC<props> = ({id,text,type}) => {
    
    return(
        <div className="">
            {(() => {
                switch (id) {
                case 'name':
                    return <Image src={person} alt="Person Icon"/>
                case 'mail':
                    return <Image src={mail} alt="Mail Icon"/>
                case 'phone':
                    return <Image src={phone} alt="Phone Icon" />
                case 'ticket':
                    return <Image src={ticket} alt="Ticket Icon"/>
                default:
                    return null
                }
                })()}
            <input className="bg-amber-50" type={type} name={id}  placeholder={text} />
        </div>
    )
}

export default InputForm;