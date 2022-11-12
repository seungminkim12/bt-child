import React from 'react'

const Login = () => {
    return (
      <form action="" id="login_form" method="post">
        <div class="inner">
            <fieldset>
                <legend>로그인</legend>
                <input type="email" id="login_id" name="login_id" placeholder="이메일"/>
                <input type="password" id="login_pw" name="login_pw" placeholder="패스워드"/>
            </fieldset>
            <ul class="search_list">
                <li><a href="">아이디</a></li>
                <li><a href="">비밀번호찾기</a></li>
            </ul>
            <ul class="social_list">
                <li><a href="" class="login">로그인</a></li>
                <li><a href="" class="kakao_login"><img/>카카오 계정으로 1초 로그인</a></li>
            </ul>
            <ul class="util">
                <li><a href="" class="btn_join"><span class="txt">회원가입</span> <span class="ps">신규 가입 쿠폰 1만원 지급</span> </a></li>
                <li><a href="" class="unknown_info"><span class="txt">비회원 주문조회</span></a></li>
            </ul>
            <dl class="qna_box">
                <dt>로그인 관련하여 궁금한 사항이 있으신가요?</dt>
                <dd><a href="">[자주 묻는 질문 바로가기]</a></dd>
            </dl>
            <dl class="user_check">
                <dt>잠깐! 계속 로그인에 실패하고 계신가요?</dt>
                <dd>
                    동일한 이메일로 2개 이상의 계정을 보유한 경우<br/>
                    원활한 서비스 이용이 어렵습니다.<br/>
                    지금 중복 계정 여부를 확인하고 사용하지 않는 계정은<br/>
                    탈퇴 신청을 해주세요.  
                </dd>
                <dd>
                    <a href="">중복 계정 여부 확인하기</a>
                </dd>
            </dl>
        </div>
      </form>
    );
};
  
export default Login;