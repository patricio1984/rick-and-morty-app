const CharacterAEpisodes = ({title, characterAEpisodes}) => {

    return (
      <div>
          <h2>{title}</h2>
  
          <div>{
                (characterAEpisodes.map(episode => (
                      <div key={episode.id}>{episode.name}</div>
                  )))
              }
          </div>
      </div>
    )
  }
  
  export default CharacterAEpisodes