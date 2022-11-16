import React from 'react'
import { useNavigate } from "react-router-dom";

// css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'


const Login = () => {
    const navigate = useNavigate();
    const navigateToPurchase = () => {
      navigate("/Category");
    };

    return (
        <div className="wrap log_wrap">
            <div className="log_box">
                <div className="logo"></div>
                <form>
                    <div>
                        <input type="text" name="id" placeholder="아이디" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="비밀번호"/>
                    </div>
                    <button type="button" className="btn wd-100" onClick={navigateToPurchase}>로그인</button>
                </form>
            </div>    
        </div>      
    );
};
  
export default Login;