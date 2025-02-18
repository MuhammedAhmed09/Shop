import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: [],
    userInfo: null
  }
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      
      addToCart: (state, action) => {
        const item = state.product.find((item) => item.id === action.payload.id);
        if( !item ) {
          state.product.push(action.payload)
        }else {
          item.quantity = action.payload.quantity
        }
      },

      // For users
      getUserName: (state, action) => {
        state.userInfo = action.payload
      },

    },
  })
  
  export const {addToCart, getUserName} = counterSlice.actions

  
  export default counterSlice.reducer