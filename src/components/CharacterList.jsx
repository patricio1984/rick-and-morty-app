const CharacterList = ({characters, title, setSelectedACharacter, setSelectedBCharacter, selectedACharacter, selectedBCharacter, setCharacterAEpisodes, setCharacterBEpisodes }) => {

  const selectOneCharacter = async (character, episodes) => {
    if(title === "Character A") {
        setSelectedACharacter(character)

        let arrayData = []
    
        episodes.forEach(async ep => {
            const response = await fetch(ep)
            const data = await response.json()

            arrayData.push(data)
        })

        setCharacterAEpisodes(arrayData)

    } else {
        setSelectedBCharacter(character)

        let arrayData = []
    
        episodes.forEach(async ep => {
            const response = await fetch(ep)
            const data = await response.json()

            arrayData.push(data)
        })

        setCharacterBEpisodes(arrayData)
    }
  }

  return (
    
        <section className="character-section">
            <h2 className="title">{title}</h2>
            {
                characters.map(character => {
                    return (           
                        <div key={character.id} className="flex character-card">
                            <img className="card-img" src={character.image} alt={character.name} />
        
                            <div>
                                <h2 className="title">{character.name}</h2>

                                <p className="paragraph">{character.status} - {character.species}</p>

                                <button className="button" onClick={() => selectOneCharacter(character, character.episode)}>Select</button>
                            </div>

                            <div className={selectedACharacter === character || selectedBCharacter === character ? `character-card-selected ${(selectedACharacter === character) ? "background-cardA" : "background-cardB"}`: "displayNone"}>
                                {`Selected Character ${selectedACharacter === character ? "A" : "B"}: ${character.name}`} 
                            </div>
                        </div>
                    )
                })
            }
        </section>
  )
}

export default CharacterList