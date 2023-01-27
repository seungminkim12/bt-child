import React, {useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import Global from "../../../js/global" /** 전역함수 */
import "../../../css/reset.css"
import "../../../css/layout.css"
import "../../../css/response.css"

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem("joinComplete") != null){
            Global.toast.alert("가입완료", "가입한 아이디로 로그인 해주세요.")
            // alert("회원가입이 완료 되었습니다. 가입한 아이디로 로그인 해주세요.")
            sessionStorage.clear();
        }

        let login_val = document.querySelectorAll(".login_input");

        login_val.forEach(el=>{
            el.addEventListener("keydown",function(e){
                if(e.code === "Enter"){
                    Login()
                }
            })
        })
    })

    let Login = () => {
        
        let login_id = document.getElementById("login_id").value;
        let login_pw = document.getElementById("login_pw").value;

        Global.Login(login_id,login_pw)
        .then(()=>{
            console.log("success")
            navigate("/")
        })
        .catch((err)=>{
            Global.toast.alert(err.type, err.message)
        })
    }

    return (
      <form action="" id="login_form" method="post">
        <div className="inner">
            <fieldset>
                <legend>로그인</legend>
                <input type="email" id="login_id" className='login_input' name="login_id" placeholder="이메일"/>
                <input type="password" id="login_pw" className='login_input' name="login_pw" placeholder="패스워드"/>
            </fieldset>
            <ul className="search_list">
                <li><Link>아이디</Link></li>
                <li><Link>비밀번호찾기</Link></li>
            </ul>
            <ul className="social_list">
                <li><Link className="login" onClick={Login}>로그인</Link></li>
                <li><Link className="kakao_login"><svg width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"></path></svg>카카오 계정으로 1초 로그인</Link></li>
            </ul>
            <ul className="util">
                <li><Link to={"/register"} className="btn_join"><span className="txt">회원가입</span> <span className="ps">신규 가입 쿠폰 1만원 지급</span> </Link></li>
                <li><Link className="unknown_info"><span className="txt">비회원 주문조회</span></Link></li>
            </ul>
            <dl className="qna_box">
                <dt>로그인 관련하여 궁금한 사항이 있으신가요?</dt>
                <dd><Link>[자주 묻는 질문 바로가기]</Link></dd>
            </dl>
            <dl className="user_check">
                <dt>잠깐! 계속 로그인에 실패하고 계신가요?</dt>
                <dd>
                    동일한 이메일로 2개 이상의 계정을 보유한 경우<br/>
                    원활한 서비스 이용이 어렵습니다.<br/>
                    지금 중복 계정 여부를 확인하고 사용하지 않는 계정은<br/>
                    탈퇴 신청을 해주세요.  
                </dd>
                <dd>
                    <Link>중복 계정 여부 확인하기</Link>
                </dd>
            </dl>
        </div>
      </form>
    );
};
  
export default Login;