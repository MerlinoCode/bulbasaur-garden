'use client';

interface BackToTopButtonProps {
    theme?: 'red' | 'emerald' | 'amber' | 'blue';
}

const themeStyles = {
    red: {
        bg: 'bg-red-500/10',
        hover: 'hover:bg-red-500/20',
        border: 'border-red-500/30',
        hoverBorder: 'hover:border-red-500/60',
        text: 'text-red-400',
        hoverText: 'group-hover:text-red-300',
        icon: 'text-red-500/70',
        hoverIcon: 'group-hover:text-red-400',
        glow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]'
    },
    emerald: {
        bg: 'bg-emerald-500/10',
        hover: 'hover:bg-emerald-500/20',
        border: 'border-emerald-500/30',
        hoverBorder: 'hover:border-emerald-500/60',
        text: 'text-emerald-400',
        hoverText: 'group-hover:text-emerald-300',
        icon: 'text-emerald-500/70',
        hoverIcon: 'group-hover:text-emerald-400',
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]'
    },
    amber: {
        bg: 'bg-amber-500/10',
        hover: 'hover:bg-amber-500/20',
        border: 'border-amber-500/30',
        hoverBorder: 'hover:border-amber-500/60',
        text: 'text-amber-400',
        hoverText: 'group-hover:text-amber-300',
        icon: 'text-amber-500/70',
        hoverIcon: 'group-hover:text-amber-400',
        glow: 'shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]'
    },
    blue: {
        bg: 'bg-blue-500/10',
        hover: 'hover:bg-blue-500/20',
        border: 'border-blue-500/30',
        hoverBorder: 'hover:border-blue-500/60',
        text: 'text-blue-400',
        hoverText: 'group-hover:text-blue-300',
        icon: 'text-blue-500/70',
        hoverIcon: 'group-hover:text-blue-400',
        glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
    }
};

export default function BackToTopButton({ theme = 'blue' }: BackToTopButtonProps) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const style = themeStyles[theme];

    return (
        <div className="mt-12 flex justify-center">
            <button
                onClick={scrollToTop}
                className={`group px-8 py-3 ${style.bg} ${style.hover} text-white rounded-full font-bold transition-all duration-300 flex items-center gap-2 border ${style.border} ${style.hoverBorder} ${style.glow}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 ${style.icon} ${style.hoverIcon}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
                <span className={`${style.text} ${style.hoverText} transition-colors duration-300 font-bold`}>Volver arriba</span>
            </button>
        </div>
    );
}
