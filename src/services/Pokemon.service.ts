import { getRandomIntInclusive } from "../lib/random-number";
import type { Pokemon } from "../types/Pokemon.interface";

const POKEMON_API_URL="https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON_COUNT=151;

const getRandomPokemon=async(): Promise<Pokemon> =>{
    const randomId= getRandomIntInclusive(1,MAX_POKEMON_COUNT);
    const response= await fetch (`${POKEMON_API_URL}/${randomId}`);
    if (!response.ok){
        throw new Error (`Error con el fetching del Pokemon con ID ${randomId}`);
    }
    const data = await response.json();
    return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default
    }
}

const normalizePokemonName= (name:string):string=>{
    return name.toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // acentos
            .replace(/[^a-z0-9\s]/g, ""); //caracteres especiales
}

const isPokemonNameValid=(pokemonName:string, userInput:string):boolean=>{
    const normalizedPokemonName=normalizePokemonName(pokemonName);
    const normalizedUserInput=normalizePokemonName(userInput);

    return normalizedPokemonName === normalizedUserInput;
}

export const pokemonService ={
    getRandomPokemon,
    isPokemonNameValid
}