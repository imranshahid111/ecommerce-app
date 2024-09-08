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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
      <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='' element={<Dashboard/>}/>
      </Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
    </>
  );
}

export default App;
