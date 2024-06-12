import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

import { Character } from '../api/Character';
import { Film } from '../api/Film';
import { Link } from 'react-router-dom';


interface Props {
    character?: Character
    films: Film[]
}

function CharacterDetail({ character, films }: Props) {

    if (!character) return <div>Character not found</div>;

    return (
        <div className="p-4 flex flex-wrap">
            <Link to="/"><ArrowUturnLeftIcon className="size-6 text-blue-500 inline-block align-text-bottom" aria-label="Detail"/> <span className="text-lg text-blue-500 inline-block">Return</span></Link>
            <h1 className="text-2xl font-bold mb-4 basis-full">{character.name}</h1>
            <div className="p-2 basis-1/2">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-1/2">
                    <h2 className="text-xl font-bold mb-2">Details</h2>
                    <p><strong>Height:</strong> {character.height}</p>
                    <p><strong>Hair Color:</strong> {character.hair_color}</p>
                    <p><strong>Eye Color:</strong> {character.eye_color}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Home Planet:</strong> {character.homeworld}</p>
                </div>
            </div>
            <div className="p-2 basis-1/2">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-1/2">
                    <h2 className="text-xl font-bold mb-2">Films</h2>
                    <ul>
                        {films.map((film, index) => (
                            <li key={index}>{film.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;