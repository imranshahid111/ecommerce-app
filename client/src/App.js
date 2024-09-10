import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Pagenotfound from "./Pages/Pagenotfound";
import HomePage from "./Pages/HeaderPage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./User/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminRoute from "./Components/Routes/AdminRoute";
import CreateCategory from "./Pages/Admin/CreateCategory";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Users from "./Pages/Admin/Users";
import Profile from "./User/Profile";
import Orders from "./User/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/dashboard' element={<PrivateRoute/>}>
            <Route path='user' element={<Dashboard/>}/>
            <Route path='/dashboard/user/profile' element={<Profile/>}/>
            <Route path='/dashboard/user/orders' element={<Orders/>}/>

        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
            <Route path='admin' element={<AdminDashboard/>}/>
            <Route path='admin/create-category' element={<CreateCategory/>}/>
            <Route path='admin/create-product' element={<CreateProduct/>}/>
            <Route path='admin/users' element={<Users/>}/>



        </Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
    </>
  );
}

export default App;
