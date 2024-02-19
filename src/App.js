import {useState, useEffect } from 'react';
import './App.css';
import './DataTable.scss';
import Sidebar from './Compenents/Sidebar';
import { Route, Routes } from 'react-router-dom';
//import Overview from './Pages/Overview';
import Details from './Pages/Details';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Dashboard from './Pages/Dashboard';
import Home from './PagesTwo/Home';
import { auth } from './Firebase-config';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



import { SkeletonTheme } from 'react-loading-skeleton';
import SignUp from './PagesTwo/SignUp';
import Login from './PagesTwo/Login';
import Birth from './PagesTwo/Birth';
import BirthDetails from './Compenents/BirthDetails';
import Certificate from './Compenents/Certificate';



const App = () => {

  const [user, setuser] = useState(null);
  const [isAuth, setisAuth] = useState(localStorage.getItem('IsAuthorised'));


  //auth user with useEffect
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
     if (authUser){
       setuser(authUser);
     }else{
       setuser(null)
     }
    })
 },[user]);

  return (
    <SkeletonTheme>
      <ToastContainer position='top-right' />
      <Sidebar isAuth={isAuth} setisAuth={setisAuth} setuser={setuser} >
      <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} /> 
          <Route path="#" element={<Dashboard />} />
          { /* <Route path="/overview" element={<Overview />} /> */ }
          <Route path="/my_details" element={<Details/>} />
          <Route path="#" element={<Product />} />
          <Route path="#" element={<ProductList />} /> 
          <Route path='/signup' element={ <SignUp setisAuth={setisAuth} />}/>
          <Route path='/login' element={<Login setisAuth={setisAuth} setuser={setuser} />} /> 
          <Route path='/birth_registration' element={<Birth isAuth={isAuth} />} />
          <Route path='/birth_update/:id' element={<Birth isAuth={isAuth} />} />
          <Route path='/birth_detail/:id' element={<BirthDetails isAuth={isAuth} />} /> 
          <Route path='/certificate' element={<Certificate isAuth={isAuth} />}  />
        </Routes>
      </Sidebar>
      </SkeletonTheme>
  )
}

export default App;




