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
        className="px-4 py-2 bg-zinc-700 text-white rounded disabled:opacity-50 transition-opacity flex items-center gap-2"
      >
        ← Anterior
      </button>

      <span className="text-white flex items-center">
        Página {page}
      </span>

      <button
        disabled={!hasNext}
        onClick={() => goToPage(page + 1)}
        className="px-4 py-2 bg-amber-400 text-black rounded disabled:opacity-50 transition-opacity flex items-center gap-2"
      >
        Siguiente →
      </button>
    </div>
  );
}
