import React from 'react'
import { NavLink } from "react-router-dom";

//css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'

import MemberTable from '../components/MemberTable';
import SideMenu from '../components/SideMenu';
import PageNation from '../components/PageNation';

const Member = () => {
    return (
      <div className="wrap">  
        <SideMenu/> 
        <div className="container">
          
          <div class="top"> 
              <div class="title">
                  <h2>회원 관리</h2> 
                  {/* <div class="button_box">                    
                      <button type="button" class="gray" onclick="location.href='../../page/member/member_rgst.html'">회원등록</button>
                  </div>                                */}
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
                    <MemberTable/>{/* contents table */}
                    <PageNation/>{/* page nation */}
                </div>
            </div>
        </div>
    </div>
    );
};
  
export default Member;