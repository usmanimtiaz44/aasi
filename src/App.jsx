import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Insights from "./pages/admin/Insights";
import Products from "./pages/admin/Products";
import Shipment from "./pages/admin/Shipment";
import Employee from "./pages/admin/Employee";
import Login from "./pages/Login";
import Dashboardnav from "./dashboardLayout/Dashboard";
import Customer from "./pages/admin/Customer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Dashboardnav type="admin" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/insight" element={<Insights />} />
          <Route path="/product" element={<Products />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/customer" element={<Customer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
