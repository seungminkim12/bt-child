import React from 'react'
import {useNavigate} from 'react-router-dom';
import Global from "../../../js/global"

import "../../../css/reset.css"
import "../../../css/layout.css"
import "../../../css/response.css"

const Mypage = () => {

    const navigate = useNavigate();

    let logout = () => {
        Global.Logout(Global.getToken("bt-child").refreshToken)
        .then((rs)=>{
            console.log("logout",rs)
            Global.deleteToken("bt-child")
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div style={{position:"relative",maxWidth:"1300px",minWidth:"300px",height:"calc(100vh - 428px)",margin:"0 auto"}}>
            <h1 style={{marginTop:"100px", textAlign:"center", fontSize:"20px"} }>마이페이지임</h1>
            <button onClick={logout} style={{
                position:"absolute",
                top:"50%",
                left:"50%",
                transfrom:"translate(-50%,-50%)",
                display:"inline-block",
                fontSize:"26px"
            }}>로그아웃</button>
        </div>
    )
}

export default Mypage