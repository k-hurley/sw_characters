import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CharacterList from '../pages/CharacterList';
import { Character } from '../api/Character';

const characters = [
  { 
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
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/7/"
    ]
  }
];

describe('Character List Page', () => {
    test('renders characters list', () => {
        render(
          <Router>
            <CharacterList characters={characters} onClick={function (character: Character): void {
                    throw new Error('Function not implemented.');
                } } />
          </Router>
        );

        expect(screen.getByText('Star Wars Characters')).toBeInTheDocument();
        expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    test('calls onClick when detail icon is clicked', () => {
      const handleClick = jest.fn();
      render(
        <Router>
          <CharacterList characters={characters} onClick={handleClick} />
        </Router>
      );
    
      const button = screen.getByLabelText('Detail');
      fireEvent.click(button);
    
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
});