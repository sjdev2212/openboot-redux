import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './counterSlice'

export const User = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
useEffect(() => {
    dispatch(getUsers())
},[dispatch] )
  return (
    <div>
<section>
    {users.map((user) => {
        return (
            <div key={user.id}>
                <h1>{user.name}</h1>
              
            </div>
        )
    }) }
</section>


    </div>
  )
}
