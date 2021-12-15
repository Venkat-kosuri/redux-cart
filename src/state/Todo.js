import{useSelector,useDispatch} from 'react-redux'
import React, {useState} from 'react'
import {Addtocart, Removetocart} from  './carSlice'

const Todo = () => {
  const name = useSelector((state) => state.counter)
   const [counter,setcounter]= useState(name.value)
   const [data,setdata] = useState(name.value)
   const dispatch = useDispatch()
   const addtodo = () => {
       dispatch(Addtocart())
     setcounter(name.value)
   }
  const removetodo = () => {
    dispatch(Removetocart())
    setdata(name.value)
  }

    return (
        <div>
          <p>{counter}</p>
            <button onClick={addtodo}>increment</button> 
            <button onClick={removetodo}>decrement</button>
            <h1>{data}</h1>
        </div>
    )
}

export default Todo

