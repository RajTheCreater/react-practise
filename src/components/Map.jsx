

const Map = () => {
    // const data = ["Google", "Micorsoft", "Apple", "Facebook"]
    const smartPhones = [
        {
            id: 1,
            brand: "Apple",
            model: "iPhone 17 Pro",
            price: "$1099",
            color: "Cosmic Orange",
            img: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 2,
            brand: "Samsung",
            model: "Galaxy S26 Ultra",
            price: "$1299",
            color: "Titanium Blue",
            img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 3,
            brand: "Google",
            model: "Pixel 10 Pro",
            price: "$999",
            color: "Obsidian Black",
            img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 4,
            brand: "Apple",
            model: "iPhone 17 Air",
            price: "$899",
            color: "Silver Mist",
            img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 5,
            brand: "Samsung",
            model: "Galaxy Z Fold 7",
            price: "$1799",
            color: "Phantom Silver",
            img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 6,
            brand: "Google",
            model: "Pixel 10 Pro Fold",
            price: "$1799",
            color: "Porcelain White",
            img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 7,
            brand: "Apple",
            model: "iPhone 17",
            price: "$799",
            color: "Lavender Teal",
            img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 8,
            brand: "Samsung",
            model: "Galaxy S26",
            price: "$799",
            color: "Rose Gold",
            img: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 9,
            brand: "Google",
            model: "Pixel 9a",
            price: "$499",
            color: "Aloe Green",
            img: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=500&auto=format&fit=crop&q=60"
        }
    ];
    // return (
    //     <>
    //         {data.map((element, index) =>
    //             <div key={index}>
    //                 <h1  >{element}</h1>
    //             </div>
    //         )}

    //         )

    return (
        <>

            {
                smartPhones.map((data) => (
                    <div key={data.id}>
                        <img src={data.img}
                            style={{ width: "250px" }}
                            alt={data.color} />
                        <h3>
                            {data.model}
                        </h3>
                    </div>
                ))
            }
        </>
    )
}

export default Map