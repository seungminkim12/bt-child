import React from 'react'

const Login = () => {
    return (
        <div class="wrap log_wrap">
            <div class="log_box">
                <div class="logo"></div>
                <form>
                    <div>
                        <input type="text" name="id" placeholder="아이디" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="비밀번호"/>
                    </div>
                    <button type="button" class="btn wd-100" onclick="location.href='index.html'">로그인</button>
                </form>
            </div>    
        </div>      
    );
};
  
export default Login;