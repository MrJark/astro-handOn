// const res = await fetch('https://api.spacexdata.com/v5/launches') // sin query lo cual nos retorna 205 elementos
import { type Doc, type APISpaceXResponse } from '../types/api'

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 12,
            },
        })
    }) // este código es de javascript. Todo nativo, nada raro 😑
    // const data = JSON.stringify(await res.json()) // he tenido que hacerlo un string para poder copiarlo y mandarlo al quicktype
    const data = await res.json() as APISpaceXResponse
    const { docs: launches } = data; // cambio de nombre
    
    // astro NO EJECUTA NADA EN LA PARTE DEL CLIENTE POR DEFECTO por tanto el log, estará en la terminal o si usas el consoleNInja aquí
    // console.log(data);

    return launches
}

export const getLaunchesById = async ({id}: { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launches = await res.json() as Doc

    return launches
}