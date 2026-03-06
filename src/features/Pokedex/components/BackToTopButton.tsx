'use client';

export default function BackToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="mt-12 mb-4 flex justify-center">
            <button
                onClick={scrollToTop}
                className="group px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 border border-white/5 hover:border-white/20"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 text-zinc-400 group-hover:text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
                Volver arriba
            </button>
        </div>
    );
}
