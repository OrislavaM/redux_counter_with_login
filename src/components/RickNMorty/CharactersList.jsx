const CharactersList = ({ charactersList = [] }) => {
    return (
        <>
            {charactersList.map(({ name }) => (
                <div>{name}</div>
            ))}
        </>
    );
};

export default CharactersList;
