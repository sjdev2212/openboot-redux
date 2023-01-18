import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const postData = createAsyncThunk(
    "login/postData",
    async (data) => {
      try {
        const response = await axios.post("https://reqres.in/api/login", data);
        // If you want to get something back
        return response.data;
      } catch (err) {
        console.error(err)
      }
    }
  );

  const initialState = {
    email:'',
    password: '',
    loading: false,
    error: null
  }
  

 const loginSlice = createSlice({
    name: 'login',
initialState,

  
  
  

  extraReducers: builder => {
    builder.addCase(postData.pending, (state) => {
     
        state.loading = true
       
      
    })
   
    builder.addCase(postData.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.password = action.payload.password
        // state[0].loading = false
     
     
      
    })
    builder.addCase(postData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
    

  }

})

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default loginSlice.reducer