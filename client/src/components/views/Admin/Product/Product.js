import React from 'react'
import { NavLink } from "react-router-dom";

//css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'

import ProductTables from '../components/ProductTable';
import SideMenu from '../components/SideMenu';
import PageNation from '../components/PageNation';

const Product = () => {
    return (
      <div className="wrap">  
        <SideMenu/> 
        <div className="container">
          
            <div className="top"> 
                <div className="title">
                    <h2>상품 관리</h2> 
                    <div className="button_box">                    
                        <button type="button">상품 등록</button>
                        <button type="button" className="gray">선택 삭제</button>
                    </div>                               
                </div>            
            </div>
            
            <div className="contents_area cate">
                {/* <div className="box_search">
                    <ul>
                        <li>카테고리 선택</li>
                        <li>
                            <select>
                                <option>대분류</option>
                                <option>욕실</option>
                            </select>
                            <select>
                                <option>소분류</option>
                                <option>욕실</option>
                            </select>
                        </li>
                    </ul>
                    <button type="button">검색</button>
                </div>            */}
                <div className="board">
                    <ProductTables/>{/* contents table */}
                    <PageNation/>{/* page nation */}
                </div>
            </div>
        </div>
    </div>
    );
};
  
export default Product;