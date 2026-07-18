import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Phones from './Pages/Phones'
import Laptops from './Pages/Laptops'
import Camera from './Pages/Camera'
import Products from './Pages/Products'
import Dynamic_User from './Pages/Dynamic_User'
import Layout from './Components/Layout'
const Index = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />

                        {/* Products parent route */}
                        <Route path="products" element={<Products />}  >

                            <Route path="phones" element={<Phones />} />
                            <Route path="laptops" element={<Laptops />} />
                            <Route path="camera" element={<Camera />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default Index