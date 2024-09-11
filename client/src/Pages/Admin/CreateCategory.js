import React, { Children, useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminMenu from '../../Components/Layout/AdminMenu'
import toast from 'react-hot-toast';
import axios from 'axios';
import Categoryform from '../../Components/Form/Categoryform';
import { Modal } from 'antd';
const CreateCategory = () => {
  const [categories , setcategories] = useState([]);
  const [name ,setname] = useState("");
  const [visible , setvisible] = useState(false);
  const [selected ,setSelected] = useState(null);
  const [updateName ,setUpdateName] = useState("")



  const handleSubmit = async(e) =>{
e.preventDefault();
    try {
      const {data} = await axios.post('/api/v1/category/create-category',{name})
      if(data?.success)
      {
        toast.success(`${name} is created`);
        getallCategories();
      }
      else {
        toast.error(`${data.message}`)
      }
    } catch (error) {
      toast.error('something went wrong in input form')
    }
  }

  const getallCategories = async () =>{
    try {
      const {data} = await axios.get('/api/v1/category/get-category')
      if(data.success){
        setcategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }

  useEffect(()=>{
    getallCategories();
  },[])
  const handleUpdate = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.put(`/api/v1/category/update-category/${selected._id}`,{name:updateName})
      if(data?.success)
      {
        toast.success(data.message)
        setSelected(null);
        setUpdateName("")
        setvisible(false);
        getallCategories();
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }

  const HandleDelete = async(pid)=>{
    
    try {
      const {data} = await axios.delete(`/api/v1/category/delete-category/${pid}`)
      if(data?.success)
      {
        toast.success(data.message)

        getallCategories();
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }
  return (
<Layout>
<div className='container-fluid m-3 p-3'>
<div className='row'>
            <div className='col-md-3'>
              <AdminMenu/>
            </div>
            <div className='col-md-9'>
                <h1>Manage Category</h1>
                <div className='p-3 w-50'>
                    <Categoryform  handleSubmit={handleSubmit} value={name} setValue={setname}/>
                </div>
                <div className='w-75'>
            <table className="table">
            <thead>
              <tr>
              
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                categories?.map((c)=>(
                <> 
              <tr>
                <td>
                  {c.name}
                  </td>
                  <td>
                    <button className='btn btn-primary ms-2' onClick={()=>{setvisible(true) ; setUpdateName(c.name);setSelected(c)}}>Edit</button>
                    <button className='btn btn-danger ms-2 ' onClick={()=>{HandleDelete(c._id)}}>Delete</button>

                  </td>
              </tr>
                  </>)
                  )
                
              }
            </tbody>
          </table>

                </div>
                <Modal onCancel={()=>setvisible(false)} footer={null} visible={visible}>
                  <Categoryform value={updateName} setValue={setUpdateName} handleSubmit={handleUpdate} />
                </Modal>
              </div>

          </div>
          </div>
</Layout>  )
}

export default CreateCategory