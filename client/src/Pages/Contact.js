import React from 'react'
import Layout from '../Components/Layout/Layout'
import myimg from '../Images/istockphoto-1141639313-612x612.jpg'
import { FaEnvelope, FaHeadset, FaPhoneAlt } from 'react-icons/fa'
const Contact = () => {
  return (
    <Layout>
        <div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <img src={myimg} className="img-fluid" alt="Contact Us" />
    </div>
    <div className="col-md-6 m-auto">
    <div className='bg-black py-2 flex justify-center items-center'>
                <h2 className="text-center  text-white">CONTACT US</h2>
      </div>
      
      <p className='pt-3'>Any query and info about product feel free to call anytime
        we 24X7 vaialible</p>
      <ul className="list-unstyled">
                    <li className='pb-3'> <FaEnvelope/> www.help@ecommerceapp.com</li>
                    <li className='pb-3'> <FaPhoneAlt/> +012-3456789</li>
                    <li className='pb-3'><FaHeadset/> 1800-0000-0000 (toll free)</li>
      </ul>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Contact