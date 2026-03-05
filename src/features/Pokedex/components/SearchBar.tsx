'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('search') || '';

    const [query, setQuery] = useState(initialQuery);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (query.trim()) {
            router.push(`/Pokedex?search=${encodeURIComponent(query.trim())}`);
        } else {
            router.push('/Pokedex');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex-1 w-full max-w-md">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Pokémon..."
                    className="w-full bg-zinc-800/80 border border-zinc-700 text-white rounded-full py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all shadow-inner"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Search"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </form>
    );
}
