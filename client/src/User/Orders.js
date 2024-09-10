import React from 'react'
import UserMenu from '../Components/Layout/UserMenu'
import Layout from '../Components/Layout/Layout'

const Orders = () => {
  return (
<Layout>
<div className='container-fluid m-3 p-3'>
<div className='row'>
            <div className='col-md-3'>
              <UserMenu/>
            </div>
            <div className='col-md-9'>
                <h1> AllOrders</h1>
              </div>
          </div>
          </div>
</Layout>    )
}

export default Orders