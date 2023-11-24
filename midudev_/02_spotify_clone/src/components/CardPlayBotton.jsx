import { usePlayerStore } from "@/store/playerStore"
import { Pause, Play } from "./Player"

export function CardPlayBotton ( { id } ) {
  const { isPlaying, currentMusic, setIsPlaying, setCurrentMusic } = usePlayerStore( state => state )

  const handleClick = () => {
    setIsPlaying( !isPlaying )
  }
  return (
    <button onClick={ handleClick } className="card-play-botton rounded-full p-3 bg-green-500">
      { isPlaying ? <Pause /> : <Play /> }
    </button>
  )
}
