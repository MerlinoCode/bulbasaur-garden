import React from "react";

interface props{
    text: string;
    btnType?: "button" | "submit" | "reset" | undefined;
}

const Formulary : React.FC<props> = ({text, btnType}) => {
    return(
        <div className="md:col-span-2">
            <button type={btnType} className="w-full py-2 rounded-md bg-amber-400 text-black font-semibold hover:bg-amber-300 transition">
            {text}
            </button>
      </div>
    )
}

export default Formulary;