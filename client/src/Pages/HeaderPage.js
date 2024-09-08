import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useAuth } from '../Context/Auth'
import { json } from 'react-router-dom';

const HomePage = () => {
  const [auth , setAuth] = useAuth();
  return (
<Layout>
    <h1>Home page</h1>
</Layout>
)
}

export default HomePage