import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import toast from 'react-hot-toast';
import styles from "../../Styles/authStyles.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth , setAuth] = useAuth()


  const navigate = useNavigate();

  const HandleSubmit = async(e) => {
    e.preventDefault();
      try {
        const res = await axios.post( '/api/v1/auth/login',
          { email , password})
          if(res.data.success){
            toast.success(res.data.message);
            setAuth({
              ...auth,
            user : res.data.user,
            token : res.data.token,   
          })
          localStorage.setItem('auth', JSON.stringify(res.data))
            navigate('/')
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
    <h4 className='title'>LOGIN FORM</h4>
     
      <div className="mb-3">
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail" required placeholder="Enter Your Email"  />
      </div>
      <div className="mb-3">
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword" required placeholder="Enter Your Password" />
      </div>
    
     
      <button type="submit" className="btn btn-primary">LOGIN</button>
    </form>
    
    </div>
        </Layout>
  )
}

export default Login