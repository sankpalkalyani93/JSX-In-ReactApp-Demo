import React, { useState } from "react";

function Greeting(){

    const message = "Hello all.";

    const [greeting, setGreeting] = useState('');
    const [submittedGreeting, setSubmittedGreeting] = useState('');
    
    const handleChange = (event) => {
        setGreeting(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedGreeting(greeting);
    };

    return(
        <div>
            <p>Greeting : {message}</p>
            <p>
                <form onSubmit={handleSubmit}>
                    <label>Enter your greeting message : </label>
                    <input type="text" value={greeting} id="message" onChange={handleChange}/><br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </p>
            <p>{greeting} The greeting message : {submittedGreeting}</p>
        </div>
    );
}

export default Greeting;