export const BASE_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_LIMIT = 50;

export type PokemonBasicInfo = {
    name: string;
    url: string;
};

export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonBasicInfo[];
};

/**
 * Fetches a list of Pokemon with pagination support.
 * @param page The current page number (1-indexed).
 * @param limit The number of results per page.
 */
export async function getPokemonList(page: number, limit: number = POKEMON_LIMIT): Promise<PokemonListResponse> {
    const offset = (page - 1) * limit;

    const res = await fetch(
        `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
        {
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error('Error al cargar Pokémon');
    }

    return res.json();
}

/**
 * Fetches a list of Pokemon and then fetches the full details for each one.
 * If a search parameter is provided, it fetches all Pokemon, filters locally, and slices the page.
 */
export async function getDetailedPokemonList(page: number, limit: number = POKEMON_LIMIT, search?: string): Promise<{
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonDetails[];
}> {
    let basicList: PokemonListResponse;

    if (search && search.trim() !== '') {
        // Fetch all pokemon to filter locally since PokeAPI doesn't have a partial text search endpoint
        const allRes = await fetch(`${BASE_URL}/pokemon?limit=10000`, { next: { revalidate: 3600 * 24 } });
        if (!allRes.ok) throw new Error('Failed to fetch master pokemon list for search');

        const allData: PokemonListResponse = await allRes.json();

        // Filter by the search query
        const filteredResults = allData.results.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );

        const totalCount = filteredResults.length;
        const offset = (page - 1) * limit;

        // Slice the results for the current page
        const paginatedResults = filteredResults.slice(offset, offset + limit);

        basicList = {
            count: totalCount,
            next: offset + limit < totalCount ? "has_next" : null,
            previous: offset > 0 ? "has_prev" : null,
            results: paginatedResults
        };
    } else {
        // 1. Fetch the basic paginated list directly
        basicList = await getPokemonList(page, limit);
    }

    // 2. Fetch the details for every single pokemon in that list concurrently
    const detailedResultsPromises = basicList.results.map(pokemon =>
        getPokemonDetails(pokemon.name)
            .catch(error => {
                console.error(`Failed to fetch details for ${pokemon.name}`, error);
                return null; // Handle individual failures gracefully
            })
    );

    const resolvedDetails = await Promise.all(detailedResultsPromises);

    // 3. Filter out any nulls from failed fetches and assert the type
    const validDetails = resolvedDetails.filter((p): p is PokemonDetails => p !== null);

    return {
        count: basicList.count,
        next: basicList.next,
        previous: basicList.previous,
        results: validDetails,
    };
}

export type PokemonDetails = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    species: {
        name: string;
        url: string;
    };
    moves: {
        move: {
            name: string;
            url: string;
        };
        version_group_details: {
            level_learned_at: number;
            move_learn_method: {
                name: string;
            };
        }[];
    }[];
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
    }[];
};

export type PokemonSpecies = {
    evolution_chain: {
        url: string;
    };
};

export type EvolutionStage = {
    species_name: string;
    id: number;
    image: string;
};

export type EvolutionChainResponse = {
    chain: {
        species: {
            name: string;
            url: string;
        };
        evolves_to: {
            species: { name: string; url: string };
            evolves_to: { species: { name: string; url: string }; evolves_to: unknown[] }[];
        }[];
    };
};

/**
 * Fetches the details of a specific Pokemon by name.
 * @param name The name of the Pokemon.
 */
export async function getPokemonDetails(name: string): Promise<PokemonDetails> {
    const res = await fetch(`${BASE_URL}/pokemon/${name}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`Error al cargar los detalles de ${name}`);
    }

    return res.json();
}

/**
 * Fetches the species details of a specific Pokemon by name.
 * @param name The name of the Pokemon.
 */
export async function getPokemonSpecies(name: string): Promise<PokemonSpecies> {
    const res = await fetch(`${BASE_URL}/pokemon-species/${name}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`Error al cargar la especie de ${name}`);
    }

    return res.json();
}

/**
 * Fetches the evolution chain from a given URL.
 * @param url The evolution chain URL.
 */
export async function getEvolutionChain(url: string): Promise<EvolutionChainResponse> {
    const res = await fetch(url, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`Error al cargar la cadena de evolución`);
    }

    return res.json();
}

/**
 * Fetches the flavor text (description) from a given URL (works for moves and abilities).
 * @param url The API URL for the move or ability.
 */
export async function getFlavorText(url: string): Promise<string> {
    const res = await fetch(url, {
        next: { revalidate: 3600 * 24 }, // Cache for 24 hours
    });

    if (!res.ok) return "No description available.";

    const data = await res.json();

    // Find Spanish flavor text first, then English
    const spanish = data.flavor_text_entries?.find((e: { language: { name: string } }) => e.language.name === 'es')?.flavor_text;
    if (spanish) return spanish.replace(/[\n\f]/g, ' ');

    const english = data.flavor_text_entries?.find((e: { language: { name: string } }) => e.language.name === 'en')?.flavor_text;
    return english ? english.replace(/[\n\f]/g, ' ') : "No description available.";
}
