import { useEffect, useState } from "react"
import "./app.css"
import CharacterList from "./components/CharacterList"
import CharacterAEpisodes from "./components/CharacterAEpisodes"
import CharacterBEpisodes from "./components/CharacterBEpisodes"

const App = () => {

  const [characters, setCharacters ] = useState([])
  const [episodes, setEpisodes ] = useState([])
  const [selectedACharacter, setSelectedACharacter ] = useState([])
  const [selectedBCharacter, setSelectedBCharacter ] = useState([])
  const [characterAEpisodes, setCharacterAEpisodes ] = useState([])
  const [characterBEpisodes, setCharacterBEpisodes ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()

      const response2 = await fetch("https://rickandmortyapi.com/api/episode")
      const data2 = await response2.json()

      setCharacters(data.results);
    }
    fetchData()
  }, [])


  return (
    <main className="main">
      <h1>Rick and Morty</h1>
      <section className="flex character-wrapper">
        <CharacterList 
          characters={characters}
          episodes={episodes} 
          title={"Character A"} 
          setSelectedACharacter={setSelectedACharacter} 
          selectedACharacter={selectedACharacter}
          setCharacterAEpisodes={setCharacterAEpisodes}

        />
        <CharacterList 
          characters={characters}
          episodes={episodes} 
          title={"Character B"} 
          setSelectedBCharacter={setSelectedBCharacter} 
          selectedBCharacter={selectedBCharacter}
          setCharacterBEpisodes={setCharacterBEpisodes} 
        />
      </section>
      <section>

      {(selectedACharacter.length !== 0 && selectedBCharacter.length !== 0) ?

         (
         <section>
            <CharacterAEpisodes title={"Character 1# - Only Episodes"} characterAEpisodes={characterAEpisodes}/>
            <CharacterBEpisodes title={"Character 2# - Only Episodes"} characterBEpisodes={characterBEpisodes}/>
         </section>
         )
         : 
         
         (<h1>Please, select a character from the Character A list and another one from the Character B list</h1>) 
      }
      </section>
    </main>
  )
}

export default App