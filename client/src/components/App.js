import './App.css';
import React from "react";
import { Route, Routes, Outlet, NavLink } from "react-router-dom";
// pages for this product
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import Home from './views/Home/Home'

import Header from "./views/include/header"
import Footer from "./views/include/footer"

const App = () => {
  return (
    
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/login" style={style}>
          Login
        </NavLink>
        <NavLink to="/register" style={style}>
          Register

        </NavLink>
        <NavLink to="/cart" style={style}>
          Cart
        </NavLink>
      </nav>

      {/* <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main> */}

      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default App;