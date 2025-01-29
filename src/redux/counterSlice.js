import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: [],
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
      }
    },
  })
  
  export const {addToCart} = counterSlice.actions

  
  export default counterSlice.reducer