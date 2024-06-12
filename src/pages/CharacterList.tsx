import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

import { Character } from '../api/Character';
import Table from '../components/Table';

interface Props {
    characters: Character[]
    onClick:    (character:Character) => void
}

function CharacterList({ characters, onClick }: Props) {

    const handleClick = (character:Character) => {
        onClick(character);
    };

    const config:Array<any> = [
        {
            label:     'Name',
            render:    (character:Character) => character.name
        },
        {
            label:     'Gender',
            render:    (character:Character) => character.gender
        },
        {
            label:     'Home Planet',
            render:    (character:Character) => character.homeworld
        },
        {
            label:     'Action',
            render:    (character:Character) => <button className='edit' onClick={() => { handleClick(character); }}><MagnifyingGlassCircleIcon className="size-8 text-blue-500" aria-label="Detail"/></button>
        }
    ];

    const keyFn = (character:Character) => {
        return character.url;
    };

    return (
        <div className="p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Star Wars Characters</h1>
            <Table config={config} data={characters} keyFn={keyFn}/>
        </div>
    );
}

export default CharacterList;