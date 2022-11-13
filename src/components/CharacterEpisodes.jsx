const CharacterEpisodes = ({title, characterAEpisodes, characterBEpisodes}) => {

    return (
      <div className="character-episode-content">
          <h2 className="character-episode-content-title">{title}</h2>
  
          <div>{ title === "Character 1# - Only Episodes" ? (
              (characterAEpisodes.map(({id, name, episode, air_date}) => (
                  <ul key={id}>
                    <li>{episode} - {name} - {air_date}</li>
                  </ul>
                )))
              ) : (
                (characterBEpisodes.map(({id, name, episode, air_date}) => (
                  <ul key={id}>
                    <li>{episode} - {name} - {air_date}</li>
                  </ul>
              )))
              )
            }
          </div>
      </div>
    )
  }
  
  export default CharacterEpisodes