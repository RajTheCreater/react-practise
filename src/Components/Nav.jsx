import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = () => {
        setisLoggedIn(true);
        navigate('/user')
    }
    const handleLogout = () => {
        setisLoggedIn(false);
        navigate('/home')
    }
    return (
        <>
            <div>
                <ul>
                    <li>  <Link to='/User'>Home</Link ></li>
                    {isLoggedIn && <>
                        <li>   <Link to='/User'>User</Link></li>
                        <li>     <Link> <button type='button' onClick={handleLogout}>Sign Out</button></Link></li>
                    </>}
                    {!isLoggedIn && <>
                        <li>     <Link to='/about'>About</Link></li>
                        <li>  <Link to='/User' to='/contact'>Contact Us</Link ></li>
                        <li> <button type='button' onClick={handleLogin}>Sign In</button></li>
                    </>}
                </ul>
            </div >
        </>
    )
}

export default Nav