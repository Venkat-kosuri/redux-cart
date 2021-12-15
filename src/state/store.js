import { configureStore } from "@reduxjs/toolkit";
import carSlice from './carSlice'
import cartSlice from "./cartSlice";
  const store = configureStore({
   reducer:{
     counter: carSlice,
     venkat:cartSlice
   },
})
export default store
