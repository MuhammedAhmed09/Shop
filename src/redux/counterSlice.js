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

      inCrement: (state, action) => {
        const item = state.product.find((item) => item.id === action.payload)
        item.quantity ++
      },

      deCrement: (state, action) => {
        const item = state.product.find((item) => item.id === action.payload) 
        if(item.quantity === 1){item.quantity === 1} else(item.quantity --)
      },

      Removeitem: (state, action) => {
        state.product = state.product.filter((item) => item.id !== action.payload)
      },

      cleanCart: (state) => {
        state.product = []
      },

      // For users
      getUserName: (state, action) => {
        state.userInfo = action.payload
      },

    },
  })
  
  export const {addToCart, deCrement, inCrement, Removeitem, cleanCart, getUserName} = counterSlice.actions

  
  export default counterSlice.reducer