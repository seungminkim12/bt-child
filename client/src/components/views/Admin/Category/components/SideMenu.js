import React from 'react'

const SideMenu = () => {
    return (
      <div className="header">   
          <a href="./login.html" className="log">로그아웃</a>      
          <div className="left_menu">
              <a href="./index.html" className="logo_sm">
                  <h1>컨버스</h1>
              </a>
              <div className="lnb">
                  <ul>
                      <li>
                          <a href="#none">상품관리</a>
                          <ul>
                              <li>
                                  <a href="../../page/product/category.html">카테고리관리</a>
                              </li>
                              <li>
                                  <a href="../../page/product/product.html">상품관리</a>
                              </li>
                          </ul>
                      </li>                   
                      <li>
                          <a href="../../page/member/member.html">회원관리</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    );
};
  
export default SideMenu;