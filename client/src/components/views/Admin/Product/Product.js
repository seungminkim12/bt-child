import React from 'react'

import { NavLink } from "react-router-dom";

//css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'

import Tables from '../components/Table';
import SideMenu from '../components/SideMenu';
import PageNation from '../components/PageNation';

const Product = () => {
    return (
      <div class="wrap">  
        <SideMenu/> 
        <div class="container">
          
            <div class="top"> 
                <div class="title">
                    <h2>상품 관리</h2> 
                    <div class="button_box">                    
                        <button type="button" onclick="location.href='../../page/product/product_rgst.html'">상품 등록</button>
                        <button type="button" class="gray" onclick="">선택 삭제</button>
                    </div>                               
                </div>            
            </div>
            
            <div class="contents_area cate">
                <div class="box_search">
                    <ul>
                        <li>카테고리 선택</li>
                        <li>
                            <select>
                                <option>전체</option>
                                <option>욕실</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>전체</option>
                                <option>욕실</option>
                            </select>
                        </li> 
                    </ul>
                    <button type="button" onclick="">검색</button>
                </div>           
                <div class="board">
                    <Tables/>{/* contents table */}
                    <PageNation/>{/* page nation */}
                </div>
            </div>
        </div>
    </div>
    );
};
  
export default Product;