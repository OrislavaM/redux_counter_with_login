import CharactersList from "./CharactersList";
import FindForm from "./FindForm";
import { useState } from "react";

const RickNMorty = () => {
    const [characterList, setCharacterList] = useState([]);
    const [name, setName] = useState("");

    const findCharacter = () => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .then((res) => res.json())
            .then((data) => setCharacterList(data.results));
    };

    return (
        <>
            <div>RickNMorty</div>
            <FindForm
                name={name}
                onNameChange={setName}
                findCharacter={findCharacter}
            />
            <CharactersList charactersList={characterList} />
        </>
    );
};

export default RickNMorty;
