import { Character } from "./Character";
import { Film } from "./Film";
import { Planet } from "./Planet";

const CHARACTER_URL = 'https://swapi.dev/api/people/';
const PLANET_URL    = 'https://swapi.dev/api/planets/';
const FILM_URL      = 'https://swapi.dev/api/films/';

export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch(`${CHARACTER_URL}?page=1`);
    const data     = await response.json();
    return data.results;
};

export const fetchPlanets = async (): Promise<Planet[]> => {
    const response = await fetch(`${PLANET_URL}`);
    const data     = await response.json();
    return data.results;
};

export const fetchFilms = async (): Promise<Film[]> => {
    const response = await fetch(`${FILM_URL}`);
    const data     = await response.json();
    return data.results;
};