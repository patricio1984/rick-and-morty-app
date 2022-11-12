const CharacterEpisodes = ({title, characterAEpisodes, characterBEpisodes}) => {

    return (
      <div className="character-episode-content">
          <h2 className="character-episode-content-title">{title}</h2>
  
          <div>{ title === "Character 1# - Only Episodes" ? (
              (characterAEpisodes.map(({id, name, episode, air_date}) => (
                <div key={id}>{episode} - {name} - {air_date}</div>
                )))
              ) : (
                (characterBEpisodes.map(({id, name, episode, air_date}) => (
                  <div key={id}>{episode} - {name} - {air_date}</div>
              )))
              )

            }
          </div>
      </div>
    )
  }
  
  export default CharacterEpisodes