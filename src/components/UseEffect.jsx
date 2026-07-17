import { useState, useEffect } from "react"



const UseEffect = () => {
    // eslint-disable-next-line no-undef
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        console.log("use effect running");
        document.title = "Rahul"
    }, [counter])
    return (
        <>
            <div>UseEffect</div>
            <h1>Counter ={counter}</h1>

            <button type="button" className="btn btn-primary btn-sm me-2" onClick={() => setCounter(counter + 1)} >Add</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setCounter(counter - 1)} >Substract</button>
        </>
    )
}

export default UseEffect