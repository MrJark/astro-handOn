import { useState } from 'preact/hooks'

export function Counter() {
    const [counter, setCounter] = useState(0)

    const addCounter = () => {
        setCounter( counter + 1)
    }
    const decCounter = () => {
        setCounter( counter + 1)
    }

    return (
        <>
            <span>{counter}</span>
            <button onClick={addCounter}>
                +
            </button>
            <button onClick={decCounter}>
                -
            </button>
        </>
    )
}