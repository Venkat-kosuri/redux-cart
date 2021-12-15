import {createSlice} from '@reduxjs/toolkit'

const carSlice = createSlice({
    name: "counter",
    initialState : {
        value:5,
    },
    reducers: {
      Addtocart (state) {
        state.value += 1;
      },
      Removetocart (state) {
          state.value -=1 ;
      },

    },
})

export const {Addtocart, Removetocart} = carSlice.actions

export default carSlice.reducer

