import   { useState } from 'react'

const Events = () => {
    const [count, setCount] = useState(0);

    const showAlert = () => {
        alert("This is my brand new alert with event");
    }
    const bg_light = () => {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    const bg_dark = () => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    const counter = (value) => {
        setCount(value); // This tells React to update the <h1> on the screen!
        alert("This is new alert " + value);
    };
    return (
        <>
            <div>Events</div>
            <h1>Counter = {count}</h1>
            <button onClick={showAlert}>Click</button>
            <div>
                <button onClick={bg_light}>Change to Light</button>
                <button onClick={bg_dark}>Change to Dark</button>
                <button onClick={() => counter(20)}>Count value</button>
            </div>
        </>
    )
}

export default Events