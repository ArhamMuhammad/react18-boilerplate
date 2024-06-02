// src/services/api.js
import fetchService from './fetchService.js';

export const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 150) + 1; // Fetch a random Pokémon
    const data = await fetchService.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    return data;
};

export const fetchGen1Pokemon = async () => {
    const pokemonPromises = Array.from({ length: 151 }, (_, index) =>
        fetchService.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
    );

    const gen1Pokemon = await Promise.all(pokemonPromises);
    return gen1Pokemon;
};
