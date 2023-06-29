import {useState} from "react";

const useCount = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
        count || setCount(0)
    }

    return [count, increment, decrement]
}

export default useCount