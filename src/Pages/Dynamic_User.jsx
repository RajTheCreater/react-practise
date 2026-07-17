import React from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

const Dynamic_User = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const users = [
    { id: 1, name: 'superman', email: 'supar@gmail.com' },
    { id: 2, name: 'batman', email: 'batman@gmail.com' },
    { id: 3, name: 'wonderwoman', email: 'wonder@gmail.com' },
    { id: 4, name: 'spiderman', email: 'spidey@gmail.com' },
    { id: 5, name: 'thor', email: 'thor@gmail.com' }
  ];
  console.log(id)
  const user = users.find(data => data.id == id);
  console.log(user)
  console.log(useLocation())
  return (
    <>
      <div>
        <h1>Id = {user.id}</h1>
        <h1>Name = {user.name}</h1>
        <h1>Email = {user.email}</h1>
      </div>
      <div>
        <button type='button' className='btn btn-sucess' onClick={() => navigate('/')}>Go To Home</button>
      </div>
    </>
  )
}

export default Dynamic_User