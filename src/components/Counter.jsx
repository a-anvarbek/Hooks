import React from "react";
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Count: <span>{count}</span></h1>
            
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>➕ Increment</button>
                
                <button onClick={() => {count > 0? setCount(count - 1) : null}}>➖ Decrement</button>
                
                <button onClick={() => setCount(0)}>🔄 Reset</button>
            </div>
        </div>
    )
}

export default Counter;