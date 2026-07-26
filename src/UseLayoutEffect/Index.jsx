import React, { useState, useLayoutEffect } from 'react'

const Index = () => {
    const [color, setcolor] = useState("black")
    useLayoutEffect(() => {
        document.body.style.backgroundColor = color

        return () => {
            second
        };
    }, [color])//dependency
    return (
        <>
            <div style={{ textAlign: 'center', padding: "20px" }}>Index</div>
            <h2>Current Bg Color  = {color}</h2>
            <button onClick={() => setcolor("lightcoral")}>Coral</button>

            <button onClick={() => setcolor("lightgreen")}>Green</button>

            <button onClick={() => setcolor("lightblue")}>Blue</button>
        </>
    )
}

export default Index