import React from 'react'
import './App.css';
import './DataTable.scss';
import Sidebar from './Compenents/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Overview from './Pages/Overview';
import Details from './Pages/Details';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
      <Sidebar>
      <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="#" element={<Dashboard />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/my_details" element={<Details/>} />
          <Route path="#" element={<Product />} />
          <Route path="#" element={<ProductList />} /> 
        </Routes>
      </Sidebar>

  )
}

export default App




