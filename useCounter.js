//Use antes del nombre para identifica que es un hook
import { useState } from 'react';
export const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue)

    return {
        counter,
        increment: (value = 1) => setCounter(counter + value),
        decrement: (value = 1) => counter > 0 && setCounter(counter - value),
        reset: () => setCounter(initialValue)
    }

}

