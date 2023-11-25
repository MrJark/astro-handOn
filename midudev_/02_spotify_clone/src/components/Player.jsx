// import Pause from "@/icons/Pause.astro"
// import Play from "@/icons/Play.astro"
// no puedo poner los siguientes componentes en jsx porque estoy añadiendo astro a jsx y no jsx a astro

import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useRef, useState } from "react"

export const Pause = ( { className } ) => (
  <svg className={ className } role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)
export const Play = ( { className } ) => (
  <svg className={ className } role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)


export function Player () {
  // const [isPlaying, setIsPlaying] = useState(false) // ya no hace falta esto gracias a zustand y al estado global que me crea y lo sustituyo por el usePlayerStore
  const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore( state => state )
  // const [ currentSong, setcurrentSong ] = useState( null ) // lo elimino porque ya saco de usePlayerStore el currentMusic
  const audioRef = useRef()

  useEffect( () => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [ isPlaying ] )


  useEffect( () => { // para que continue por donde se qeudó
    audioRef.current.src = `/music/1/02.mp3`
  }, [] )


  const handleClick = () => {
    // comento esto porque ya no es a nivel componente, sino en global y de ahí el useEffect
    // if ( isPlaying )
    // {
    //   audioRef.current.pause()
    // } else
    // {
    //   audioRef.current.play()
    //   audioRef.current.volume = 0.2
    // }

    setIsPlaying( !isPlaying )
  }
  return (
    <>
      <div className="flex flex-row justify-between w-full px-4 z-50">
        <div>
          Current Soon...
        </div>

        <div className="grid place-content-center gap-4 flex-1">
          <div className="flex justify-center">
            <button
              onClick={ handleClick }
              className="bg-white rounded-full p-2">
              { isPlaying ? <Pause /> : <Play /> }
            </button>
          </div>
        </div>

        <div className="grid place-content-center">
          Volumen...
        </div>

        <audio ref={ audioRef } />
      </div>
    </>
  )
}
