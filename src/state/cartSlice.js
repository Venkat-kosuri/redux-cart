import {createSlice} from "@reduxjs/toolkit"

const cartSlice =createSlice ({
    name: "venkat",
    initialState :{
      users:["modelx","modely","tesla"],
    },
    reducers : {
      update : (state,action) => {
          state.name=action.name ;
          state.users=action.users
      }
    }
})




export const {update} = cartSlice.actions;
export default cartSlice.reducer






