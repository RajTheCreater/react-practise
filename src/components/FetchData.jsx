import { useEffect, useState } from 'react'

const FetchData = () => {
    const [userData, setuserData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await api.json();
            console.log(data);
            setuserData(data);
        }
        fetchData();
    }, [])

    return (
        <>
            <div>{
                userData.map((item) =>
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                    </div>)}</div>
        </>
    )
}

export default FetchData