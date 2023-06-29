import useCount from "../../hooks/useCount.js";

const Counter = () => {

    const [count, increment, decrement] = useCount()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter