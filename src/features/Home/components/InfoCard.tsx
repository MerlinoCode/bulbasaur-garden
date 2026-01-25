import React from "react";
import Image from 'next/image';
import { default as airport } from '../assets/airport.svg';
import { default as landscape } from '../assets/landscape.svg';
import { default as magicHat } from '../assets/magicHat.svg';
interface props{
    desc: string;
    logo: string;
}

const InformationCard : React.FC<props> = ({desc, logo}) => {
    
    return(
        <div className="information-card text-white">
            <div className="info-logo">
            {(() => {
                switch (logo) {
                case 'airport':
                    return  <>
                                <Image src={airport} alt="Airport" width={50} height={50} />
                                <h2>Un Viaje Soñado</h2>
                            </>
                case 'landscape':
                    return  <>
                                <Image src={landscape} alt="Landscape" width={50} height={50} />
                                <h2>Magnífico Paisaje</h2>
                            </>
                    
                case 'magicHat':
                    return  <>
                                <Image src={magicHat} alt="Magic Crystal Ball" width={50} height={50} />
                                <h2>Momentos Inspiradores</h2>
                            </>
                default:
                    return null
                }
                })()}
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default InformationCard;