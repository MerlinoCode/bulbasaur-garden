import React from "react";

interface props {
    text: string;
    btnType?: "button" | "submit" | "reset" | undefined;
}

const Formulary: React.FC<props> = ({ text, btnType }) => {
    return (
        <div className="md:col-span-2 mt-4">
            <button
                type={btnType}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black uppercase tracking-widest shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
                {text}
            </button>
        </div>
    );
}

export default Formulary;