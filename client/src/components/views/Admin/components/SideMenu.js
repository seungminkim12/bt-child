import React,{useState} from 'react'
import { NavLink } from "react-router-dom";

const SideMenu = () => {
    const [isOpen, setNav] = (useState(false))  //useState의 기능은 this.state와 유사하다
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    return (
        <div className="header">   
            <a href="./login.html" className="log">로그아웃</a>      
            <div className="left_menu">
            <NavLink to="/admin/Category" className="logo_sm">
                    <h1>컨버스</h1>
                </NavLink>
                <div className="lnb">
                    <ul>
                        <li>
                            <a onClick={toggleNav}>상품관리</a>
                            <ul className={isOpen ? "show-menu" : "hide-menu"}>
                                <li>
                                    <NavLink to="/admin/Category">카테고리관리</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/Product">상품관리</NavLink>
                                </li>
                            </ul>
                        </li>                   
                        <li>
                            <NavLink to="/admin/Member">회원관리</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
  
export default SideMenu;