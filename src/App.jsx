import { useEffect, useState } from "react"
import "./App.css"
import CharacterList from "./components/CharacterList"
import CharacterEpisodes from "./components/CharacterEpisodes"
import CharacterSharedEpisodes from "./components/CharacterSharedEpisodes"
import Pagination from "./components/Pagination"

const App = () => {

  const [characters, setCharacters ] = useState([])
  const [selectedACharacter, setSelectedACharacter ] = useState([])
  const [selectedBCharacter, setSelectedBCharacter ] = useState([])
  const [characterAEpisodes, setCharacterAEpisodes ] = useState([])
  const [characterBEpisodes, setCharacterBEpisodes ] = useState([])
  const [sharedEpisodes, setSharedEpisodes ] = useState([])

  const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pages, setPages] = useState()
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = currentPageUrl

    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()

      setCharacters(data.results);

      setNextPageUrl(data.info.next);

      setPrevPageUrl(data.info.prev);

      setPages(data.info.pages);

      
    }
    fetchData()
  }, [currentPageUrl])

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  
    let newcurrentPage = currentPage + 1

    setCurrentPage(newcurrentPage)
  }
    
  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl)

    let newcurrentPage = currentPage - 1

    setCurrentPage(newcurrentPage)
  }

  const goToPage = num => {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    
    setCurrentPage(num)
  }


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
          pages={pages}
          setCurrentPageUrl={setCurrentPageUrl}
          nextPageUrl={nextPageUrl}
          prevPageUrl={prevPageUrl}
        />
        <CharacterList 
          characters={characters} 
          title={"Character #2"} 
          setSelectedBCharacter={setSelectedBCharacter} 
          selectedBCharacter={selectedBCharacter}
          setCharacterBEpisodes={setCharacterBEpisodes}
          characterBEpisodes={characterBEpisodes}
          pages={pages}
          setCurrentPageUrl={setCurrentPageUrl}
          nextPageUrl={nextPageUrl}
          prevPageUrl={prevPageUrl}
        />
      </section>

      <section>
        <Pagination
              nextPage={nextPageUrl ? nextPage : null}
              prevPage={prevPageUrl ? prevPage : null}
              goToPage={goToPage}
              pages={pages}
              currentPage={currentPage}
          />
      </section>

      <section>
        {(selectedACharacter.length !== 0 && selectedBCharacter.length !== 0) ?
            (
            <article className="character-episode-container flex">
                <CharacterEpisodes title={"Character 1# - Only Episodes"} characterAEpisodes={characterAEpisodes}/>
                <CharacterSharedEpisodes title={"Characters #1 & #2 - Shared Episodes"} characterAEpisodes={characterAEpisodes} characterBEpisodes={characterBEpisodes} sharedEpisodes={sharedEpisodes} setSharedEpisodes={setSharedEpisodes} />
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