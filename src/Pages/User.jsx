import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const User = () => {
    const users = [
        { id: 1, name: 'superman', email: 'supar@gmail.com' },
        { id: 2, name: 'batman', email: 'batman@gmail.com' },
        { id: 3, name: 'wonderwoman', email: 'wonder@gmail.com' },
        { id: 4, name: 'spiderman', email: 'spidey@gmail.com' },
        { id: 5, name: 'thor', email: 'thor@gmail.com' }
    ];
    return (
        <>
            {users.map((user) => <div key={user.id}>
                <Link to={`/user/${user.id}`}><h1>{user.name}</h1></Link>
            </div >
            )
            }
        </>
    )
}

export default User