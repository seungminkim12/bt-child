import React from 'react'
import { Link } from 'react-router-dom';
import "../../../css/reset.css"
import "../../../css/layout.css"
import "../../../css/response.css"
const Login = () => {
    return (
      <form action="" id="login_form" method="post">
        <div className="inner">
            <fieldset>
                <legend>로그인</legend>
                <input type="email" id="login_id" name="login_id" placeholder="이메일"/>
                <input type="password" id="login_pw" name="login_pw" placeholder="패스워드"/>
            </fieldset>
            <ul className="search_list">
                <li><Link>아이디</Link></li>
                <li><Link>비밀번호찾기</Link></li>
            </ul>
            <ul className="social_list">
                <li><Link className="login">로그인</Link></li>
                <li><Link className="kakao_login"><img/>카카오 계정으로 1초 로그인</Link></li>
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