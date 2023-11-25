import { usePlayerStore } from "@/store/playerStore" // estado global
import { Pause, Play } from "./Player"
import { songs } from "@/lib/data"

export function CardPlayBotton ( { id } ) {
  const {
    isPlaying,
    currentMusic,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore( state => state )

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
  const handleClick = () => {
    if ( isPlayingPlaylist )
    {
      setIsPlaying( false )
      return
    }
    fetch( `/api/get_info_playlist.json?id=${ id }` )
      .then( res => res.json() )
      .then( data => {
        const { song, playlist } = data
        setIsPlaying( true )
        setCurrentMusic( { songs, playlist, song: songs[ 0 ] } )
      } )
    // setCurrentMusic( {
    //   playlist: {
    //     id
    //   }
    // } )

    // setIsPlaying( !isPlaying )
  }

  return (
    <button onClick={ handleClick } className="card-play-botton rounded-full p-3 bg-green-500">
      { isPlayingPlaylist ? <Pause /> : <Play /> }
    </button>
  )
}
