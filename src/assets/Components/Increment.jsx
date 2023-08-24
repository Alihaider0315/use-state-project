import React, { useState } from 'react'

const Increment = () => {
    let [counter,setCounter] = useState(0)

    const incrementhandler = ()=>{
        setCounter(++counter);
    }
    
    const decrementhandler =() =>{
        if(counter > 0){
            setCounter(--counter);
        }
    } 

    const buttonresetHandler =() =>{
        setCounter(0);
    }

  return (
   <div>
   <div className='container'>
   <h1 className='text-center mt-5'>Counter Application</h1>
   <div className='row justify-content-center'>
   <div className='col-5'>
   <div className='screen mt-5 text-center fs-1'>{counter}</div>
   <div className='button d-flex justify-content-center gap-3 mt-3'>
    <button className='btn btn-success' onClick={incrementhandler}>Increment Operator + </button>
    <button className='btn btn-warning' onClick={decrementhandler}>Decrement Operator -</button>
    <button className='btn btn-danger' onClick={buttonresetHandler}>Reset Counter 0</button>
   </div>
   </div>
   </div>
   </div>
   </div>
  )
}

export default Increment
