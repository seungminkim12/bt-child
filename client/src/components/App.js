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
// category
const Category = lazy(() => import('./views/Admin/Category/Category'))
const CategoryRgst = lazy(() => import('./views/Admin/Category/CategoryRgst'))
const CategoryRgstSm = lazy(() => import('./views/Admin/Category/CategoryRgstSm'))
//member
const Member = lazy(() => import('./views/Admin/Member/Member'))
const MemberDetail = lazy(() => import('./views/Admin/Member/MemberDetail'))
const MemberRgst = lazy(() => import('./views/Admin/Member/MemberRgst'))
//Product
const Product = lazy(() => import('./views/Admin/Product/Product'))
const ProductRgst = lazy(() => import('./views/Admin/Product/ProductRgst'))





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
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Route>
          
          {/* admin */}
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="Category" element={<Category />} />
          <Route path="CategoryRgst" element={<CategoryRgst />} />
          <Route path="CategoryRgstSm" element={<CategoryRgstSm />} />
          <Route path="Member" element={<Member />} />
          <Route path="MemberDetail" element={<MemberDetail />} />
          <Route path="MemberRgst" element={<MemberRgst />} />
          <Route path="Product" element={<Product />} />
          <Route path="ProductRgst" element={<ProductRgst />} />

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        {/* </Route> */}
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