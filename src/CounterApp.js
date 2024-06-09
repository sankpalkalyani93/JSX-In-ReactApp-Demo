import React, { useState } from "react";

function CounterApp(){

    const [counter, setCounter] = useState(0);
    const [incrementCounter, setIncrementCounter] = useState(0);

    const handleIncrementCounter = (event) => {
        if (incrementCounter < 20){

            if(incrementCounter % 2 === 0){
                setCounter(counter + 1)
            }   
            else {
                setCounter(counter + 5)
            }
            setIncrementCounter(counter + 1);
        }
    };

    return (
        <div>
            <h2>The Counter App</h2>
            <p><button type="button" onClick={handleIncrementCounter}>Increment</button></p>
            <p>Current Counter value : {incrementCounter}</p>
        </div>
    );
}

export default CounterApp;