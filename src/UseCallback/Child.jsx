import React, { useEffect } from 'react'

const Child = ({ handleClick, counter1 }) => {
    useEffect(() => {
        console.log("Child Component is rendering")
    }, [handleClick])

    return (
        <>
            <div>This is Child Component = {counter1}</div> 
            <button onClick={handleClick} >Increase child counter</button>
        </>
    )
}

export default Child