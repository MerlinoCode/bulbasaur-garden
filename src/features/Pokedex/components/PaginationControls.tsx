'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export default function PaginationControls({
  page,
  hasNext,
  hasPrev,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get('search');

  function goToPage(newPage: number) {
    const searchPart = currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : '';
    const targetUrl = `/Pokedex?page=${newPage}${searchPart}`;

    router.push(targetUrl);
  }

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
      <button
        disabled={!hasPrev}
        onClick={() => goToPage(page - 1)}
        className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl transition-all duration-200 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-red-900/20 active:scale-95"
      >
        ← Anterior
      </button>

      <div className="px-5 py-2 bg-zinc-900/80 border border-zinc-800 rounded-2xl backdrop-blur-md">
        <span className="text-white font-black tracking-tighter">
          PÁGINA <span className="text-red-500 ml-1">{page}</span>
        </span>
      </div>

      <button
        disabled={!hasNext}
        onClick={() => goToPage(page + 1)}
        className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl transition-all duration-200 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-red-900/20 active:scale-95"
      >
        Siguiente →
      </button>
    </div>
  );
}
