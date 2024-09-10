import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import toast from 'react-hot-toast';
import styles from "../../Styles/authStyles.css"

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");    
    const [answer, setanswer] = useState("");
    const navigate = useNavigate();

const HandleSubmit = async(e) => {
  e.preventDefault();
    try {
      const res = await axios.post( '/api/v1/auth/register',
        {name , email , password , phone , address , answer })
        if(res.data.success){
          toast.success(res.data.message);
          navigate('/login')
        }
        else{
          toast.error(res.data.message);
        }
    } catch (error) {
      console.log(error)
    }
}
  return (

    <Layout>
<div className='form-container'>

<form onSubmit={HandleSubmit} >
<h4 className='title'>REGISTER FORM</h4>
  <div className="mb-3">
    <input type="type" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="exampleInputName" required placeholder="Enter Your Name"  />
  </div>
  <div className="mb-3">
    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail" required placeholder="Enter Your Email"  />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword" required placeholder="Enter Your Password" />
  </div>
  <div className="mb-3">
    <input type="number" value={phone} onChange={(e)=>setphone(e.target.value)} className="form-control" id="exampleInputPassword" required placeholder="Enter Your Phone" />
  </div>
  <div className="mb-3">
    <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)} className="form-control" id="exampleInputPassword" required placeholder="Enter Your address" />
  </div>
  <div className="mb-3">
    <input type="text" value={answer} onChange={(e)=>setanswer(e.target.value)} className="form-control" id="exampleInputPassword" required placeholder="What is your favourite fruit" />
  </div>
 
  <button type="submit" className="btn btn-primary">REGISTER</button>
</form>

</div>
    </Layout>
  )
}

export default Register