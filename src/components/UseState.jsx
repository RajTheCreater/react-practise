import React, { useState }  from 'react'

const UzeState = () => {
    // let counter = 0;
    const [counter, setCounter] = useState(0)
    const increase = () => { 
        setCounter(counter+1);
        console.log(counter);
    }
    const decrease = () => { 
        setCounter(counter-1);
        console.log(counter);
    }
    return (
        <>
            <h1>Counter ={counter}</h1>
            <button onClick={increase} >increase</button>
            <button onClick={decrease} >decrease</button>
        </>
    )
}

export default UzeState