import React from 'react'
import { useNavigate } from "react-router-dom";

// css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'


const Login = () => {
    const navigate = useNavigate();

    const navigateToPurchase = () => {
    navigate("/admin/Category");

    // if(condition) {
    //         fetch("http://localhost:1377/api/users", {
    //                 method: 'POST',
    //                 headers: [["Content-Type", "application/json"]],
    //                 body: JSON.stringify({
    //                 email: id,
    //                 password: pw
    //             }),
    //         })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             if(result.token !== undefined) {
    //                 localStorage.setItem('access_token : ', result.token)
    //                 navigate("/list-haneul");
    //                 sessionStorage.setItem("id", id);
    //             }
    //             else {
    //                 alert('아이디 또는 패스워드를 확인해주세요!');
    //             }
    //         }
    //     )
    // }
};

    return (
        <div className="wrap log_wrap">
            <div className="log_box">
                <div className="logo"></div>
                    <div>
                        <input type="text" name="id" placeholder="아이디" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="비밀번호"/>
                    </div>
                    <button type="button" className="btn wd-100" onClick={navigateToPurchase}>로그인</button>
            </div>    
        </div>      
    );
};
  
export default Login;