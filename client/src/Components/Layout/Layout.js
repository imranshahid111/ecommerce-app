import React from 'react'
import Header from './Header'
import Footor from './Footor'
function Layout (props) {
  return (
    <div>
        <Header/>
        <main style={{minHeight : "80vh"}}>{props.children}</main>
        <Footor/>
    </div>
  )
}

export default Layout