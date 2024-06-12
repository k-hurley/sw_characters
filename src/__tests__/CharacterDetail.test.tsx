import { render, screen } from '@testing-library/react';

import CharacterDetail from '../pages/CharacterDetail';
import { Film } from '../api/Film';

const character = { 
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    hair_color: 'blond',
    eye_color: 'blue',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
    homeworld: 'Tatooine',
    films: [
        "https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/1/"
    ]
};

const films = [
    { title: 'A New Hope' },
    { title: 'The Empire Strikes Back' },
    { title: 'Return of the Jedi' },
    { title: 'Revenge of the Sith' }
] as Film[];

describe('Character Detail Page', () => {
    test('renders character detail', () => {
        render(
            <CharacterDetail character={character} films={films} />
        );

        expect(screen.getByText(character.name)).toBeInTheDocument();
        expect(screen.getByText(character.height)).toBeInTheDocument();
        expect(screen.getByText(character.hair_color)).toBeInTheDocument();
        expect(screen.getByText(character.eye_color)).toBeInTheDocument();
        expect(screen.getByText(character.gender)).toBeInTheDocument();
        expect(screen.getByText(character.homeworld)).toBeInTheDocument();

        films.forEach(film => {
            expect(screen.getByText(film.title)).toBeInTheDocument();
        });
    });
});