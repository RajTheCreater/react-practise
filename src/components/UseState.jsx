import   { useState }  from 'react'

const UzeState = () => {
    // let counter = 0;
    const [counter, setCounter] = useState(10)
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
            <button  type="button" className="btn btn-primary" onClick={increase} >increase</button>
            <button  type="button" className="btn btn-primary" onClick={decrease} >decrease</button>
        </>
    )
}

export default UzeState