import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Insights from './pages/Insights';
import Products from './pages/Products';
import Shipment from './pages/Shipment';
import Employee from './pages/Employee';
import Login from './pages/Login';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route  path='/' element={<Login/>} />
      <Route  path='/dashboard' element={<Dashboard/>} />
      <Route  path='/insight' element={<Insights/>} />
      <Route  path='/product' element={<Products/>} />
      <Route  path='/shipment' element={<Shipment/>} />
      <Route  path='/employee' element={<Employee/>} />
    </Routes>
   </Router>
  )
}

export default App