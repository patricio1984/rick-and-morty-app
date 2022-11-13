const CharacterList = ({
    characters, 
    title, 
    setSelectedACharacter, 
    setSelectedBCharacter, 
    selectedACharacter, 
    selectedBCharacter, 
    setCharacterAEpisodes, 
    setCharacterBEpisodes,
}) => {

  const selectOneCharacter = async (character, episodes) => {

    const arrayData = await Promise.all(
        episodes.map(async ep => {
            const response = await fetch(ep)
            const data = await response.json()

            return (data)
        })
    )

    if(title === "Character #1") {
        setSelectedACharacter(character)
    
        setCharacterAEpisodes(arrayData)

    } else {
        setSelectedBCharacter(character)

        setCharacterBEpisodes(arrayData)
    }
  }

  return (
    
        <section className="character-section">
            <h2 className="title title--margin">{title}</h2>
            {
                characters.map(character => {
                    return (           
                        <div key={character.id} className="flex character-card">
                            <img className="card-img" src={character.image} alt={character.name} />
        
                            <div className="card-content flex">
                                <h2 className="title">{character.name}</h2>

                                <p className="paragraph"><span className={character.status.toLowerCase()}></span>{character.status} - {character.species}</p>

                                <button className="button" onClick={() => selectOneCharacter(character, character.episode)}>Select</button>
                            </div>

                            <div className={selectedACharacter === character || selectedBCharacter === character ? `character-card-selected ${(selectedACharacter === character) ? "background-cardA" : "background-cardB"}`: "displayNone"}>
                                {`Selected Character ${selectedACharacter === character ? "#1" : "#2"}: ${character.name}`} 
                            </div>
                        </div>
                    )
                })
            }
        </section>
  )
}

export default CharacterList