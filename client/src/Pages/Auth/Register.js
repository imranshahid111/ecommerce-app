import React from 'react'
import Layout from '../../Components/Layout/Layout'

const Register = () => {
  return (
    <Layout>
<div className='register'>
<h1>Register Page</h1>
<form style={{width:"263px"}}>
  <div className="mb-3">
    <input type="type" className="form-control" id="exampleInputName" placeholder="Enter Your Name"  />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Your Email"  />
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Your Password" />
  </div>
  <div className="mb-3">
    <input type="number" className="form-control" id="exampleInputPassword" placeholder="Enter Your Phone" />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputPassword" placeholder="Enter Your address" />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
    </Layout>
  )
}

export default Register