import { useEffect, useState } from "react"
import "./app.css"
import CharacterList from "./components/CharacterList"
import CharacterEpisodes from "./components/CharacterEpisodes"

const App = () => {

  const [characters, setCharacters ] = useState([])
  const [selectedACharacter, setSelectedACharacter ] = useState([])
  const [selectedBCharacter, setSelectedBCharacter ] = useState([])
  const [characterAEpisodes, setCharacterAEpisodes ] = useState([])
  const [characterBEpisodes, setCharacterBEpisodes ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()

      setCharacters(data.results);
    }
    fetchData()
  }, [])


  return (
    <main className="main">
      <h1 className="main-title">Rick and Morty App</h1>

      <section className="flex character-wrapper">
        <CharacterList 
          characters={characters}
          title={"Character #1"} 
          setSelectedACharacter={setSelectedACharacter} 
          selectedACharacter={selectedACharacter}
          setCharacterAEpisodes={setCharacterAEpisodes}
          characterAEpisodes={characterAEpisodes}
        />
        <CharacterList 
          characters={characters} 
          title={"Character #2"} 
          setSelectedBCharacter={setSelectedBCharacter} 
          selectedBCharacter={selectedBCharacter}
          setCharacterBEpisodes={setCharacterBEpisodes}
          characterBEpisodes={characterBEpisodes}
        />
      </section>
      <section>

      {(selectedACharacter.length !== 0 && selectedBCharacter.length !== 0) ?

         (
         <article className="character-episode-container flex">
            <CharacterEpisodes title={"Character 1# - Only Episodes"} characterAEpisodes={characterAEpisodes}/>
            <CharacterEpisodes title={"Character 2# - Only Episodes"} characterBEpisodes={characterBEpisodes}/>
            <CharacterEpisodes title={"Character 2# - Only Episodes"} characterBEpisodes={characterBEpisodes}/>
         </article>
         )
         : 
         
         (<h2 className="character-episode-title">Please, select a character from the Character 1# list and another one from the Character 2# list</h2>) 
      }
      </section>
    </main>
  )
}

export default App