import React, { useCallback, useEffect, useState } from 'react';

import './App.css';

import { fetchCharacters, fetchFilms, fetchPlanets } from './api/swapi';
import { Character } from './api/Character';
import { Film } from './api/Film';
import CharacterList from './pages/CharacterList';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter]   = useState<Character>();
  const [films, setFilms]           = useState<Film[]>([]);

  const navigate = useNavigate();

  const fetchCharacterFilms = async(character:Character) => {
    const films             = await fetchFilms();
    const namedFilms:Film[] = [];
    character.films.forEach((film) => {
      const namedFilm = films.find((_film => _film.url === film));
      if (namedFilm) namedFilms.push(namedFilm);
    });
    setFilms(namedFilms);
    setCharacter(character);
    navigate('/detail');
  };

  const fetchData = useCallback(async() => {
    const charactersData = await fetchCharacters();
    const planets        = await fetchPlanets();
    const characters     = charactersData.map((character) => {
        const planet = planets.find((_planet => _planet.url === character.homeworld));
        return { ...character, homeworld: planet?.name || ''};
      });
    setCharacters(characters);
  }, []);

  useEffect(() => {
      fetchData();
  }, [fetchData]);

  return (
    <Routes>
      <Route path="/"       element={<CharacterList   characters={characters} onClick={fetchCharacterFilms} />} />
      <Route path="/detail" element={<CharacterDetail character={character} films={films} />} />
      <Route path="*"       element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
