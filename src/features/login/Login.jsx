import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../counter/loginSlice';





const Loginformik = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
console.log(data)



    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log(email, password)
        dispatch(postData({ email, password }));
    
        
    
       
      };
    
    


       return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" >Name</label>
            <input id="email" type="email"  />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"  />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
}

export default Loginformik;
