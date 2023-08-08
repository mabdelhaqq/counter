import { useState } from "react";
import "./Counter.css"

const Counter = () => {
    const[counter, setCounter]= useState(0);

    const Decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

  return (
    <div className="container">
        <h3>counter: {counter}</h3>
        <div className="buttons">
            <button onClick={()=> setCounter(counter + 1)}>INCREMENT</button>
            <button onClick={Decrement}>DECREMENT</button>
            <button onClick={()=> setCounter(0)}>RESET</button>
        </div>
    </div>
  )
}

export default Counter