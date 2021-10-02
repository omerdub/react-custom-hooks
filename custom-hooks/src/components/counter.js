import useLocalStorage from "../hooks/useLocalStorage";


export default function Counter() {
    const [value, setValue] = useLocalStorage('counter', 0);
    return(
        <div data-testid="test-1">
        <h3>
            {value}
        </h3>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setValue(0)}>CLEAR</button>
        </div>
    );
}