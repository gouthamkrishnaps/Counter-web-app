import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  const [range,setRange] = useState("")
  console.log(range);
  //hook to dispatch a function in action
  const dispatch = useDispatch()
  //component can access the state by using useSelecter hook
  const count = useSelector((state)=>state.counter.value) 
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
        {/* display section */}
        <h1 className='mt-5' style={{fontSize:'100px'}}>{count}</h1>
        {/* buttons */}
        <div className="buttons d-flex gap-3 mt-5">
            <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
            <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3'>Increment</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3'>Reset</button>
        </div>
        {/* input box */}
        <div className='w-100'>
          <input onChange={(e)=>setRange(e.target.value)} type="text"  className='form-control mt-3' placeholder='Enter range' style={{borderColor:'grey'}}/>
        </div>
    </div>
  )
}

export default Counter