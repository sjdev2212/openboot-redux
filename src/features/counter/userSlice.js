import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

 export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://dog.ceo/api/breeds/image/random')
  .then((res) => {
    const peshitos = res.data
    // console.log(peshitos)
    return peshitos
  })
})

 const userSlice = createSlice({
  name: 'user',
  loading: false,

  initialState: [
    {  user: '',
       loading: false       }
  ]

  
  
  ,

  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
     
      state[0].loading = true
      
    })
   
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
     
      state[0].user = action.payload
      
    })

  }

})

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer