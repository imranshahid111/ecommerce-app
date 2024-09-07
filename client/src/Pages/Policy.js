import React from 'react'
import Layout from '../Components/Layout/Layout'
import myimg from '../Images/istockphoto-1141639313-612x612.jpg'

const Policy = () => {
  return (
    <Layout>
    <div className="container mt-5">
<div className="row">
<div className="col-md-6">
  <img src={myimg} className="img-fluid" alt="Contact Us" />
</div>
<div className="col-md-6 m-auto">
<div className='bg-black py-2 flex justify-center items-center'>
            <h2 className="text-center  text-white">Privacy Policy</h2>
  </div>
  
  <p className='pt-3'>Any query and info about product feel free to call anytime
    we 24X7 vaialible</p>
  <ul className="list-unstyled">
                <li className='pb-3'> add Policy</li>
                <li className='pb-3'> add Policy</li>             
                <li className='pb-3'> add Policy</li>
                <li className='pb-3'> add Policy</li>
                <li className='pb-3'> add Policy</li>
                <li className='pb-3'> add Policy</li>
   </ul>
</div>
</div>
</div>

</Layout>
  )
}

export default Policy