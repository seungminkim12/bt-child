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
    /** 세션스토리지값 */
    let _session = Global.getToken("bt-child",sessionStorage);

    /** 로컬스토리지값 */
    let _local = Global.getToken("bt-child",localStorage);

    /** 세션스토리지가 있음 */
    if(_session){
      Global.getSession(_session.token)
      .then((rs)=>{
        console.log("로그인 중")
      })
      .catch((err)=>{
        Global.Login(_local.user.id,_local.user.pw).then((rs)=>{
          console.log("로그인중임 재로그인")
        })
      })
    }
    /** 세션스토리지가 없음 */
    else {
      /** 로컬스토리지가 있음 */
      if(_local){
        Global.getSession(_local.token)
        .then((rs)=>{
          console.log("로컬스토리지로 getSession 태움",rs)
          Global.Login(_local.user.id,_local.user.pw)
          .then((rs)=>{
            console.log("jwt 만료되기전임. 재로그인 함")
          })
          .catch((err)=>{
            console.log("만료 됨",err)
            localStorage.clear("bt-child")
          })
        })
        .catch((err)=>{
          console.log("getSession fail",err)
        })
      }
      /** 로컬스토리지가 없음 */
      else {
        console.log("비로그인")
      }
    }

    return () => {
        console.log("render before",_location);
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