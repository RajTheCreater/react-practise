import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <h1>
                Welcome to Product Component</h1>
            <div>
                <h2>Products Page</h2>
                <nav>
                    <Link to="phones">Phones</Link> |{" "}
                    <Link to="laptops">Laptops</Link> |{" "}
                    <Link to="camera">Camera</Link>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default Products;
