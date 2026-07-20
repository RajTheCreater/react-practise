import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const People = () => {
    // const contextData = useContext(MyContext)
    // console.log("  contextData = ", contextData)
    const {  money, name,counter, setcounter, data } = useContext(MyContext)
    return (
        <>
            <h1>
                Welcome to People Component { }
            </h1>
            <h1>Name = {name}</h1>
            <h1>Money = {money}</h1>
            <h3>Date = {data}</h3>
            <h2>Counter = {counter}</h2>
            <button onClick={() => setcounter(counter + 1)} >Increase</button>
            <button onClick={() => setcounter(counter - 1)} >Decrease</button>
        </>
    )
}

export default People