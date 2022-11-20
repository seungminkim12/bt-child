import React from 'react'
import { NavLink } from "react-router-dom";

//css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'

import Tables from '../components/Table';
import SideMenu from '../components/SideMenu';
import PageNation from '../components/PageNation';

const Category = () => {
    return (
      <div className='wrap'>
        <SideMenu/>
        <div className="container">{/* container start */}
          <div className="top"> 
              <div className="title">
                  <h2>대분류/소분류 관리</h2> 
                  <div className="button_box">                    
                      <NavLink to="/CategoryRgst"><button type="button">대분류 등록</button></NavLink>
                  </div>                               
              </div>            
          </div>    

          <div className="contents_area cate">{/* contents start */}
            <div className="box_guide">
                  <h4>안내사항</h4>
                  <p>-대분류/소분류로 등록 가능합니다.</p>
                  <p>-카테고리 삭제는 하위 카테고리가 없거나 카테고리 내에 등록된 상품이 없는 경우에 삭제 가능합니다.</p>
                  <p>-삭제하려는 카테고리에 상품 등록을 했을 경우는 상품의 카테고리를 변경 후 삭제가 가능합니다.(이미 삭제한 상품이 해당 카테고리에 속해 있는 경우 삭제 불가 합니다.)</p>
            </div>
            <div className="board">
              <Tables/>{/* contents table */}
              <PageNation/>{/* page nation */}
            </div>  
          </div>{/* contents end */}
        </div>{/* container end */}
      </div>
    );
};
  
export default Category;