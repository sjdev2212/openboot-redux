import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'
import './user.css'



const Users = () => {
    const peshito = useSelector(state => state.user)
    const loader = useSelector(state => state.user[0].loading)
    console.log(loader)
    
     const dispatch = useDispatch()
const randomDog = () => {
    dispatch(fetchUsers())
}

useEffect(() => {
    randomDog()
},[])
  

  
    return (
      <div className='container main'>
  <h1>Peshuito aleatorio</h1>
  
<div className="img">
  <img src={peshito[0].user.message } style={{width: "500px" , height: "600px"}} alt="peshitos" />
  </div>
  <button className='btn btn-outline-success m-3' onClick={randomDog}>{loader ? 'otro ': 'loading' }</button>

      </div>
    )
}

export default Users