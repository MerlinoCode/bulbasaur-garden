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
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-50 group-focus-within:opacity-100 transition-opacity">
                {(() => {
                    const iconClass = "w-5 h-5 filter brightness-0 invert";
                    switch (id) {
                        case 'name': return <Image src={person} alt="Person" width={20} height={20} className={iconClass} />
                        case 'mail': return <Image src={mail} alt="Email" width={20} height={20} className={iconClass} />
                        case 'phone': return <Image src={phone} alt="Phone" width={20} height={20} className={iconClass} />
                        case 'ticket': return <Image src={ticket} alt="Ticket" width={20} height={20} className={iconClass} />
                        case 'message': return <Image src={message} alt="Message" width={20} height={20} className={`${iconClass} -mt-12`} />
                        default: return null;
                    }
                })()}
            </div>

            {type === "text" || type === "number" || type === "mail" ? (
                <input
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-zinc-800/50 text-white border border-white/5 focus:border-amber-500/50 focus:bg-zinc-800/80 focus:outline-none backdrop-blur-sm transition-all placeholder:text-zinc-600 font-medium"
                    type={type}
                    name={id}
                    placeholder={text}
                />
            ) : (
                <textarea
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-zinc-800/50 text-white border border-white/5 focus:border-amber-500/50 focus:bg-zinc-800/80 focus:outline-none backdrop-blur-sm transition-all resize-none placeholder:text-zinc-600 font-medium"
                    name={id}
                    placeholder={text}
                    rows={5}
                />
            )}
        </div>
    );
}

export default InputForm;