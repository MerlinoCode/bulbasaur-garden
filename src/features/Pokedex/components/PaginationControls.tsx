'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

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
  const [isPending, startTransition] = useTransition();

  function goToPage(newPage: number) {
    const searchPart = currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : '';
    startTransition(() => {
      router.push(`/Pokedex?page=${newPage}${searchPart}`);
    });
  }

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
      <button
        disabled={!hasPrev || isPending}
        onClick={() => goToPage(page - 1)}
        className="px-4 py-2 bg-zinc-700 text-white rounded disabled:opacity-50 transition-opacity flex items-center gap-2"
      >
        {isPending && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
        ← Anterior
      </button>

      <span className="text-white flex items-center">
        Página {page}
      </span>

      <button
        disabled={!hasNext || isPending}
        onClick={() => goToPage(page + 1)}
        className="px-4 py-2 bg-amber-400 text-black rounded disabled:opacity-50 transition-opacity flex items-center gap-2"
      >
        Siguiente →
        {isPending && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
      </button>
    </div>
  );
}
