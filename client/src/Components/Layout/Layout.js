import React from 'react'
import Header from './Header'
import Footor from './Footor'
import  { Toaster } from 'react-hot-toast';

function Layout (props) {
  return (
    <div>
        <Header/>
        <main style={{minHeight : "70vh"}}>
        <Toaster/>
          {props.children}
          </main>
        <Footor/>
    </div>
  )
}

export default Layout