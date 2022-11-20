import React from 'react'
import { NavLink } from "react-router-dom";

//css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'

import SideMenu from '../components/SideMenu';

const CategoryRgst = () => {
    return (

    <div className='wrap'>
    <SideMenu/>
    <div className="container">
        <div className="top">              
            <div className="title">
                <h2>대분류 추가</h2> 
                <div className="button_box">                    
                    <NavLink to="/Category"><button type="button">등록</button></NavLink>
                </div>                               
            </div>            
        </div>

        <div className="contents_area cate">
            <form>
                
                <h3 className="line">대분류 등록</h3>
                <div className="box_cont">                
                    <div className="row">
                        <div className="col">카테고리명</div>
                        <div className="col">
                            <input type="text" name="" placeholder="" /> 
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col">출력여부</div>
                        <div className="col">  
                            <div className="prt">
                                <label>                      
                                    <input type="radio" id="" name="print" defaultChecked={"true"}/> 출력
                                </label>  
                                <label>                    
                                    <input type="radio" id="" name="print" /> 미출력
                                </label>
                            </div>
                        </div>
                    </div>                               
                </div>

            </form>  

        </div>
        </div>
    </div>
    );
};
  
export default CategoryRgst;