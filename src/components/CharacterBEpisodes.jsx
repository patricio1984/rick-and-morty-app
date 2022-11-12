const CharacterBEpisodes = ({title, characterBEpisodes}) => {

  return (
    <div>
        <h2>{title}</h2>

        <div>{
              (characterBEpisodes.map(episode => (
                  <div key={episode.id}>{episode.name}</div>
              )))
            }
        </div>
    </div>
  )
}

export default CharacterBEpisodes