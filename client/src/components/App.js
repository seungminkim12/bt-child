import './App.css';
import React, {lazy, Suspense} from "react";
import { Route, Routes, Outlet, NavLink } from "react-router-dom";
// pages for this product
// import LoginPage from "./views/LoginPage/LoginPage";
// import RegisterPage from "./views/RegisterPage/RegisterPage";
// import CartPage from "./views/CartPage/CartPage";
// import Home from './views/Home/Home'

// import Header from "./views/include/header"
// import Footer from "./views/include/footer"

// // admin page
// import AdminLogin from "./views/Admin/Login/Login";
// import Category from "./views/Admin/Category/Category";

//header footer
const Header = lazy(() => import('./views/include/header'))
const Footer = lazy(() => import('./views/include/footer'))

//user
const Home = lazy(() => import('./views/Home/Home'));
const LoginPage = lazy(() => import('./views/LoginPage/LoginPage'))
const CartPage = lazy(() => import('./views/CartPage/CartPage'))
const RegisterPage = lazy(() => import('./views/RegisterPage/RegisterPage'))

//admin
const AdminLogin = lazy(() => import('./views/Admin/Login/Login'))
const Category = lazy(() => import('./views/Admin/Category/Category'))

const hideHeader = true;


const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route element={<Layout />}>
          {/* user */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="cart" element={<CartPage />} />

          {/* admin */}
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="Category" element={<Category />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      {hideHeader ?  null : <Header />}      
      <Outlet />
      {hideHeader ? null : <Footer />}
    </>
  );
};

export default App;