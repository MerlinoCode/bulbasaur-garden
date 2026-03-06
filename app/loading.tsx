'use client';

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-16">
          <div className="absolute inset-0 bg-emerald-500/30 rounded-full animate-ping" />
          <div className="relative w-full h-full bg-zinc-900 border-2 border-emerald-500/50 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
          </div>
        </div>
        <h2 className="text-2xl font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">
          Cargando
        </h2>
        <p className="text-zinc-500 text-sm font-medium tracking-wide">
          Obteniendo datos...
        </p>
      </div>
    </div>
  );
}
