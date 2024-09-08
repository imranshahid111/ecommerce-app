import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Spinner = () => {
    const [count , setCount] = useState(5);
    const naviagate = useNavigate();

    useEffect(()=>{
        const intervel = setInterval(()=>{
            setCount((prevValue)=> --prevValue);
        },1000);
        count==0 && naviagate('/login')
        return () => clearInterval(intervel);
    },[count,naviagate])
  return (
    <>
<div className="container d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
  <div className="row">
    <div className="col">
        <h1 className="">redrecting to you in {count} seconds</h1>
    <div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>  </div>
  </div>
</div>



    </>
  )
}

export default Spinner