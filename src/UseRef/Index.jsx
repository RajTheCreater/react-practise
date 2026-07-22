import React, { useState } from 'react'

const Index = () => {
    const [bg, setbg] = useState("white");
    const changeBg = () => {
        const colors = ["yellow", "pink", "blue", "orange", "purple", "black"];
        setbg(colors[Math.floor(Math.random() * colors.length)]);
    }
    console.log(("Re - rendered Components"));

    return (
        <>
            <div style={{
                height: '100vh', backgroundColor: bg, display: "flex",
                justifyContent: 'centre',
                alignItems: "centre"
            }}><button onClick={changeBg}>
                    Change Background
                </button>
            </div >

        </>
    )
}

export default Index