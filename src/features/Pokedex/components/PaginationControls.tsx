'use client';

import { useRouter } from 'next/navigation';

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

  function goToPage(newPage: number) {
    router.push(`/pokemon?page=${newPage}`);
  }

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        disabled={!hasPrev}
        onClick={() => goToPage(page - 1)}
        className="px-4 py-2 bg-zinc-700 text-white rounded disabled:opacity-50"
      >
        ← Anterior
      </button>

      <span className="text-white flex items-center">
        Página {page}
      </span>

      <button
        disabled={!hasNext}
        onClick={() => goToPage(page + 1)}
        className="px-4 py-2 bg-amber-400 text-black rounded disabled:opacity-50"
      >
        Siguiente →
      </button>
    </div>
  );
}
