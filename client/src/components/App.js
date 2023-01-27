import './App.css';
import React, {lazy, Suspense,useEffect} from "react";
import { Route, Routes, Outlet, NavLink,useLocation } from "react-router-dom";
import Global from "../js/global"

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
const MyPage = lazy(() => import("./views/MyPage/MyPage"))



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




const App = () => { 
  const _location = useLocation();

  useEffect(() => {
    
    let _token = Global.getToken("bt-child");

    /** 토큰이 있음 */
    if(_token){
      Global.getSession(_token.accessToken)
      .then(rs=>{
        console.log("access",rs)
      })
      .catch(err=>{
        console.log("access fail")
        Global.getSession(_token.refreshToken)
        .then((rs)=>{
          console.log("refresh",rs)
        })
        .catch(err=>{
          console.log("refresh err",err)
        })
      })
      
    }
    /** 토큰이 없음 */
    else {
      
    }

    return () => {
        console.log("render before");
    };
}, [_location.pathname]);

  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
          <Route element={<Layout />}>
            {/* user */}
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="mypage" element={<MyPage />} />
          </Route>
          
          {/* admin */}
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/Category" element={<Category />} />
          <Route path="admin/CategoryRgst" element={<CategoryRgst />} />
          <Route path="admin/CategoryRgstSm" element={<CategoryRgstSm />} />
          <Route path="admin/Member" element={<Member />} />
          <Route path="admin/MemberDetail" element={<MemberDetail />} />
          <Route path="admin/MemberRgst" element={<MemberRgst />} />
          <Route path="admin/Product" element={<Product />} />
          <Route path="admin/ProductRgst" element={<ProductRgst />} />

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Suspense>

    <Routes>

    </Routes>
    </>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      
      {window.location.pathname.indexOf("admin") != -1 ?  null : <Header />}      
      <Outlet />
      {window.location.pathname.indexOf("admin") != -1 ? null : <Footer />}
    </>
  );
};

export default App;