import React from "react";
import Image from 'next/image';
import { default as person } from './assets/Person.svg';
import { default as mail } from './assets/Mail.svg';
import { default as phone } from './assets/Phone.svg';
import { default as ticket } from './assets/Ticket.svg';
import { default as message } from './assets/Message.svg';

interface props {
    id: string;
    text: string;
    type: string;
}

const InputForm: React.FC<props> = ({ id, text, type }) => {

    return (
        <div className="relative">
            {(() => {
                switch (id) {
                    case 'name':
                        return <Image className="w-5 h-5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" src={person} alt="Person Icon" />
                    case 'mail':
                        return <Image className="w-5 h-5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" src={mail} alt="Mail Icon" />
                    case 'phone':
                        return <Image className="w-5 h-5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" src={phone} alt="Phone Icon" />
                    case 'ticket':
                        return <Image className="w-5 h-5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" src={ticket} alt="Ticket Icon" />
                    case 'message':
                        return <Image className="w-5 h-5 text-zinc-400 absolute left-3 top-1/6 -translate-y-1/2" src={message} alt="Message Icon" />
                    default:
                        return null
                }
            })()}
            {type === "text" || type === "number" || type === "mail" ?
                <input className="w-full pl-10 pr-4 py-2 rounded-md bg-zinc-800 text-white
                                    border border-zinc-700 focus:border-amber-400
                                    focus:outline-none" type={type} name={id} placeholder={text} />
            :
                <textarea className="w-full pl-10 pr-4 py-2 rounded-md bg-zinc-800 text-white
                                    border border-zinc-700 focus:border-amber-400
                                    focus:outline-none resize-y" name={id} placeholder={text} rows={5}/>}
        </div>
    )
}

export default InputForm;