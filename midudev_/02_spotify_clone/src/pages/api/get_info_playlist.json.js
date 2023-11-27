import { allPlaylists, songs as allSongs } from "../lib/data";


export async function GET ( { params, request } ) {
  // get id from the url search params
  const { url } = request

  // una forma de conseguir la id de la url 
  // const [ , querystring ] = url.split( "?" )
  // const searchParams = new URLSearchParams()

  // otra froma de conseguirla
  const urlObject = new URL( url )
  const id = urlObject.searchParams.get( 'id' )

  // recuperación de la info de la playlist
  const playlist = allPlaylists.find( ( playlist ) => playlist.id === id )
  const songs = allSongs.filter( song => song.albumId === playlist?.albumId )

  return new Response( JSON.stringify( { playlist, songs } ) )
}