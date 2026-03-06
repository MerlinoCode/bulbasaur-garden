import Form from "./components/Form/Form";
import BackToTopButton from "../Pokedex/components/BackToTopButton";

export function ContactPage() {
    return (
        <div className="min-h-screen pb-24 relative overflow-hidden">
            {/* Background Glow Orbs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            {/* Hero Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 mb-20 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-full mb-8">
                        <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.5)]">
                            <div className="w-8 h-8 bg-white rounded-full border-4 border-zinc-900"></div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 tracking-[-0.02em] mb-6 drop-shadow-xl">
                        Contacto
                    </h1>
                    <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                        ¿Tienes dudas sobre el jardín? Cualquier sugerencia que tengas, estamos aquí para escucharte.
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Side: Contact Form */}
                    <div className="lg:col-span-7">
                        <Form title='DEJANOS TU MENSAJE' />
                    </div>

                    {/* Right Side: Contact Details & FAQ */}
                    <div className="lg:col-span-5 space-y-10 focus:outline-none">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-white tracking-tight">Canales <span className="text-amber-400 text-shadow-glow">Directos</span></h2>
                            <div className="space-y-5">
                                {/* Support Card */}
                                <div className="group flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center gap-4 min-[400px]:gap-6 p-7 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:bg-zinc-900/60 transition-all duration-300">
                                    <div className="text-3xl group-hover:scale-125 transition-transform duration-300">📧</div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-1">Soporte Técnico</h4>
                                        <p className="text-white font-black text-sm md:text-base whitespace-nowrap">soporte@bulbasaurgarden.com</p>
                                    </div>
                                </div>

                                {/* Press Card - Increased Size/Width */}
                                <div className="group flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center gap-4 min-[400px]:gap-6 p-7 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:bg-zinc-900/60 transition-all duration-300">
                                    <div className="text-3xl group-hover:scale-125 transition-transform duration-300">📢</div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-1">Prensa & Eventos</h4>
                                        <p className="text-white font-black text-sm md:text-base whitespace-nowrap">prensa@bulbasaurgarden.com</p>
                                    </div>
                                </div>

                                {/* Socials Card - Specific SVG Icons */}
                                <div className="group flex flex-col gap-8 p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] hover:bg-zinc-900/60 transition-all duration-500">
                                    <div>
                                        <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-2">Presencia Digital</h4>
                                        <p className="text-white font-black text-3xl tracking-tight">@BulbaGarden</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {[
                                            { icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />, label: "YouTube" },
                                            { icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.74.02 1.48-.04 2.96-.04 4.44-.38-.06-.77-.01-1.15.04-1.04.15-2.05.74-2.63 1.63-.47.7-.63 1.58-.45 2.43.1.57.41 1.08.82 1.5.47.48 1.11.83 1.77.89 1.48.19 3.11-.61 3.69-2.01.21-.51.27-1.06.27-1.6V0h.04z" />, label: "TikTok" },
                                            { icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />, label: "Instagram" },
                                            { icon: <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C24.012 5.367 18.643 0 12.017 0z" />, label: "Pinterest" },
                                            { icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />, label: "Facebook" }
                                        ].map((soc) => (
                                            <div
                                                key={soc.label}
                                                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-xl hover:bg-amber-500 hover:text-black hover:scale-110 shadow-lg transition-all duration-300 cursor-pointer"
                                                title={soc.label}
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">{soc.icon}</svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-amber-500/10 border border-amber-500/20 rounded-[2.5rem] relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/40 transition-colors" />
                            <h3 className="text-xl font-black text-amber-400 mb-4 tracking-wide uppercase relative z-10">Horarios de Atención</h3>
                            <p className="text-zinc-400 font-medium leading-relaxed relative z-10">
                                Nuestro equipo técnico está disponible de Lunes a Viernes de 9:00 a 18:00 (GMT-3) para asistirte en cualquier inconveniente.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <BackToTopButton />
        </div>
    );
}