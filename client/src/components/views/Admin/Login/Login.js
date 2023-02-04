import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Global from "../../../../js/global"

// css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'


const Login = () => {
    const navigate = useNavigate();

    useEffect(()=>{

        let loginVal = document.querySelectorAll(".admin_login");
        loginVal.forEach(el => {
            el.addEventListener("keydown",function(e){
                if(e.code === "Enter"){
                    navigateToPurchase();
                }
            })
        });
    })

    const navigateToPurchase = () => {
        let loginId = document.querySelector('#adminId').value;
        let loginPw = document.querySelector('#adminPw').value;

        Global.Login(loginId,loginPw)
        .then((result) => {
            console.log("success")
            navigate("/admin/Category"); //로그인후 adim main 이동
        }).catch((err) => {
            Global.toast.alert(err.type, err.message)
        });
};

    return (
        <div className="wrap log_wrap">
            <div className="log_box">
                <div className="logo"></div>
                    <div>
                        <input type="id" name="id" placeholder="아이디" id='adminId' className='admin_login'/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="비밀번호" id='adminPw' className='admin_login'/>
                    </div>
                    <button type="button" className="btn wd-100" onClick={navigateToPurchase}>로그인</button>
            </div>    
        </div>      
    );
};
  
export default Login;