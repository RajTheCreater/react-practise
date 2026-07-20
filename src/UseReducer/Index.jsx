import React, { useReducer } from 'react'

const counterReducer = (state, action) => {
    console.log("state", state)
    switch (action.type) {
        case "Increment":
            return { counter: state.counter + 1 }
            break;
        case "Decrement":
            return { counter: state.counter - 1 }
            break;
        case "IncrementBy10":
            return { counter: state.counter + 10 }
            break;
        case "Reset":
            return { counter: 0}
            break;
    }
}
const Index = () => {
    const [ state, dispatch ] = useReducer(counterReducer, { counter: 0 });
    return (
        <>
            <h1>
                Counter = {state.counter}
            </h1>
            <button onClick={()=> dispatch({type:"Increment"}) } >Increase</button>
            <button onClick={()=> dispatch({type:"Decrement"}) } >Decrease</button>
            <button onClick={()=> dispatch({type:"IncrementBy10"}) } >IncrementBy10</button>
            <button onClick={()=> dispatch({type:"Reset"}) } >Reset</button>
        </>
    )
}

export default Index