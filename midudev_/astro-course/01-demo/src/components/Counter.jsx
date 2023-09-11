import { useState } from 'preact/hooks'

export function Counter() {
    const [counter, setCounter] = useState(0)

    const addCounter = () => {
        setCounter( counter => counter + 1)
    }
    const decCounter = () => {
        setCounter( counter => counter - 1)
    }

    return (
        <>
            <button class=" border rounded-md px-4 py-2 text-xl m-6" onClick={addCounter}>
                +
            </button>
            <span>{counter}</span>
            <button class=" border rounded-md px-4 py-2 text-xl m-6" onClick={decCounter}>
                -
            </button>
        </>
    )
}