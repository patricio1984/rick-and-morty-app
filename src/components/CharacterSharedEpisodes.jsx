import { useEffect } from "react"

const CharacterSharedEpisodes = ({
    title, 
    characterAEpisodes, 
    characterBEpisodes, 
    setSharedEpisodes, 
    sharedEpisodes
}) => {

  useEffect(() => {
    if (characterAEpisodes && characterBEpisodes) {
        let sharedEpisodesArray = [].concat(... 
            characterAEpisodes.filter(a => characterBEpisodes.some(b => a.id === b.id))
        );
    
        setSharedEpisodes(sharedEpisodesArray)
      }
  }, [characterAEpisodes, characterBEpisodes])
  

  return (
    <div className="character-episode-content">
        <h2 className="character-episode-content-title">{title}</h2>

        {sharedEpisodes.length !== 0 ?
        
        (sharedEpisodes.map(({id, name, episode, air_date}) => (
                <ul key={id}>
                    <li>{episode} - {name} - {air_date}</li>
                </ul>             
            )
        )) : 
            <p>These characters don't have any shared episodes</p>
        }
    </div>
  )
}

export default CharacterSharedEpisodes