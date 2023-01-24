import React, { useEffect } from 'react'
import Global from "../../../js/global" /** 전역함수 */
import "../../../css/reset.css"
import "../../../css/layout.css"
import "../../../css/response.css"
import { Link, useNavigate } from 'react-router-dom';


/** 이메일 정규식 */
let regex = /^([0-9a-zA-Z_\-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
let REST_API_URI = "56736ec94d4fe9406655d0ec2ff8c795";
let REDIRECT_URI = "http://localhost:3000"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_URI}&redirect_uri=${REDIRECT_URI}&response_type=code`;




const RegisterPage = () => {

    let nav = useNavigate()

    useEffect(()=>{
        let gender = document.querySelectorAll(".gender input");/** 성별 체크 */
        let agree_allChk = document.getElementById("chk_all");/** 약관 전체 동의 */
        let agree_chk = document.querySelectorAll(".chk");/** 개별 체크 */

        gender_chk(gender);
        chk_box(agree_allChk, agree_chk)
        return () => {
            console.log("컴포넌트가 사라졌을시")
        }
    })

    /**
     * 성별 체크박스 이벤트
     * @param {Element} element 
     */
    const gender_chk = (element) => {
        for(let i=0; i<element.length; i++){
            let siblings = element[i].parentElement.parentElement.children;
            element[i].addEventListener("change",function(){
                for(let j=0; j<element.length; j++){
                    siblings[j].classList.remove("on");
                    siblings[j].querySelector("input").checked=false
                }

                element[i].parentElement.classList.add("on");
                element[i].checked=true
            })
        }
    }

    /**
     * 약관 체크박스 이벤트
     * @param {Element} allChk
     * 전체 체크
     * 
     * @param {Element} chkElement 
     * 개별 약관 체크
     */
    const chk_box = (allChk ,chkElement) => {
        /** 전체동의 */
        allChk.addEventListener("change",function(){
            if(this.checked){
                chkElement.forEach(el=>el.checked = true)
            } else {
                chkElement.forEach(el=>el.checked = false)
            }

        })

        /** 체크 완료된 항목 */
        let checked_arr = [];
        /** 개별체크 */
        chkElement.forEach(el=>{
            el.addEventListener("change",function(){
                if(el.checked){
                    checked_arr.push(this)
                    
                } else {
                   let delete_num = checked_arr.findIndex(data => data === this);
                   checked_arr.splice(delete_num,1)
                }

                if(checked_arr.length === document.querySelectorAll(".chk").length){
                    allChk.checked=true
                } else {
                    allChk.checked=false
                }
            })
        })        
    }

    const join_submit = () => {
        join_progress()
        .then(()=>{
            sessionStorage.setItem("joinComplete",true)
            nav("/login")
        })
        .catch((err)=>{
            console.log("err",err)
            Global.toast.alert(err.errType, err.msg)
        })
    }

    /**
     * 회원가입 입력 확인
     */
    const join_progress = () => {
        return new Promise((resolve, reject) => {
            /** 이메일 입력값 */
            let _email = document.getElementById("join_id").value;
            /** 비밀번호 입력 값 */
            let _pw = document.getElementById("join_pw").value;
            /** 비밀번호 입력확인 값  */
            let _pwChk = document.getElementById("join_pwCheck").value;
            /** 이름 */
            let _name = document.getElementById("join_name").value;

            /** 폰번호 */
            let _middle = document.getElementById("call_middle").value;
            let _last = document.getElementById("call_last").value;

            let _phoneNumber = document.getElementById("call_first").value + _middle + _last;

            /** 생년월일 */
            let _year = document.getElementById("join_birthYear").value;
            let _month = document.getElementById("join_birthMonth").value;
            let _date = document.getElementById("join_birthDate").value;

            let _birth = `${_year}.${_month}.${_date}`;
            
            /** 남자체크 */
            let _gender_man = document.getElementById("gender_man").checked;
            /** 여자체크 */
            let _gender_woman = document.getElementById("gender_woman").checked

            /** 이용약관동의 */
            let _user_info = document.getElementById("chk_user_info").checked; 

            /**개인정보수집 및 이용 동의 */
            let _personal_info = document.getElementById("chk_personal_info").checked;

            if(_email === "") reject({errType:"이메일 미입력",msg:"이메일을 입력해 주세요."})
            else if(!regex.test(_email)) reject({errType:"이메일 형식 오류",msg:"이메일 형식에 맞지 않습니다. 올바른 형식으로 입력해 주세요."})
            else if(_pw === "") reject({errType:"비밀번호 미입력",msg:"비밀번호를 입력해 주세요."})
            else if(_pwChk.length < 6) reject({errType:"비밀번호 형식 오류",msg:"비밀번호는 6자리 이상 입력해 주세요."})
            else if(_pwChk === "") reject({errType:"비밀번호확인 미입력",msg:"비밀번호를 한번더 입력해 주세요."})
            else if(_pw !== _pwChk) reject({errType:"비밀번호 확인 오류",msg:"비밀번호가 같지않습니다. 비밀번호를 확인해 주세요."})
            else if(_name === "") reject({errType:"이름 미입력",msg:"이름을 입력해 주세요."})
            else if(_middle === "" || _last === "") reject({errType:"휴대폰번호 미입력",msg:"휴대폰 번호를 입력해 주세요."})
            else if(_year === "" || _month === "" || _date === "") reject({errType:"생년월일 미입력",msg:"생년월일을 입력해 주세요."})
            else if(_month > 12 || _date > 31) reject({errType:"생년월일 형식 오류",msg:"생년월일을 확인해 주세요."})
            else if(!_gender_man && !_gender_woman) reject({errType:"성별 미체크",msg:"성별을 체크해주세요."})
            else if(!_user_info || !_personal_info) reject({errType:"필수 항목 미체크",msg:"필수항목을 체크해 주세요."})

            else {
                /** 
                 * 성별 체크 값 
                 * @param {Number}
                 * 0 : 남자, 1 : 여자
                 * */
                let _gender;

                if(_gender_man) _gender = 0;
                else if(_gender_woman) _gender = 1;



                fetch("/api/users",{
                    method:"POST",
                    headers: {
                        "X-Powered-By":"Express",
                        "Content-Type":"application/json; charset=utf-8",
                        "ETag":'W/"2f-tVeQsHeD5w7sUHaMuEfYDyucLG0"',
                        "Date":new Date().toUTCString(),
                        "Connection":"keep-alive",
                        "Keep-Alive":"timeout=5"
                    },
                    body:JSON.stringify({
                        email: _email,
                        password: _pw,
                        passwordConfirmation: _pwChk,
                        name: _name,
                        phoneNumber: _phoneNumber,
                        birth: _birth,
                        gender: _gender,
                    })
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Data",data)
                    resolve()
                }).catch((err)=>{
                    reject(err)
                })
            }
        })
    }

    /**
     * input 글자수 제한
     */
    const maxLengthCheck = (e) => {
        if (e.target.value.length > e.target.maxLength){
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }    

        
    }
    

    return (
      <section id="join">
        <h2 className="hidden">회원가입</h2>
        <div className="banner">
            <dl>
                <dt>회원가입</dt>
                <dd>
                    지금 컨버스 회원으로 가입하시고, 특별한 멤버십 혜택과 <br/>
                    다양한 회원 전용 상품을 만나보세요.
                </dd>
                <dd>
                    <Link>회원 혜택 보러 가기 </Link>
                </dd>
            </dl>
        </div>
        <form action="http://localhost:1337/api/users" id="join_form" method="post">
            <div className="input_box">
                <div className="inner">
                    <ul className="btn_list">
                        <li><button type="button"><svg width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"></path></svg>카카오 계정으로 1초 로그인</button></li>
                    </ul>
                    <h3>필수정보</h3>
                    <ul className="input_list">
                        <li>
                            <input type="email" id="join_id" placeholder="이메일을 입력해주세요(필수)"/>
                            <p>로그인 아이디로 사용할 이메일을 입력해 주세요.</p>
                        </li>
                        <li>
                            <input type="password" id="join_pw" name="join_pw" placeholder="비밀번호(영문/숫자/특수문자 중 2가지 이상 조합, 10자~16자)"/>
                        </li>
                        <li>
                            <input type="password" id="join_pwCheck" name="join_pwCheck" placeholder="비밀번호 입력확인"/>
                        </li>
                        <li>
                            <input id="join_name" name="join_name" type="text" placeholder="이름을 입력해주세요(필수)"/>
                        </li>
                        <li className="call">
                            <select name="call_first" id="call_first">
                                <option value="010">010</option>
                                <option value="019">019</option>
                                <option value="016">016</option>
                            </select>
                            <span></span>
                            <input type="number" name="call_middle" id="call_middle" maxLength={4} onInput={maxLengthCheck}/>
                            <span></span>
                            <input type="number" name="call_last" id="call_last" maxLength={4} onInput={maxLengthCheck}/>
                        </li>
                        <li className="birth">
                            <p>*생일/성별은 가입 후 수정이 불가합니다.</p>
                            <div>
                                <input id='join_birthYear' type="number" placeholder="1994" maxLength={4} onInput={maxLengthCheck}/>
                                <span>년</span>
                                <input id='join_birthMonth' type="number" maxLength={2} onInput={maxLengthCheck}/>
                                <span>월</span>
                                <input id='join_birthDate' type="number" maxLength={2} onInput={maxLengthCheck}/>
                                <span>일</span>
                            </div>
                        </li>
                        <li className="gender">
                            <label htmlFor="gender_man">
                                <input type="checkbox" name="man" id="gender_man" className="hidden"/>
                                남성
                            </label>
                            <label htmlFor="gender_woman">
                                <input type="checkbox" name="woman" id="gender_woman" className="hidden"/>
                                여성
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="chk_box">
                <div className="inner">
                    <label htmlFor="chk_all" className="chk_all">
                        <input type="checkbox" id="chk_all"/>
                        <span>모든 약관 동의</span>
                    </label>
                    <dl className="txt_dl">
                        <dt>
                            아래 모든 약관(필수), 개인정보 수집 및 이용에 대한 동의(필수) 및 광고성 정보수신 동의(선택) 내용을 확인하고 전체 동의합니다.
                        </dt>
                        <dd>
                            필수 정보의 수집 및 이용에 관한 동의를 거부하실 수 있으나, 다만 이 경우 회원 가입 및 관련 서비스 이용은 불가합니다.
                        </dd>
                        <dd>
                            선택 항목에 대한 동의를 거부하더라도 회원가입에 영향을 미치지 않습니다.
                        </dd>
                        <dd>
                            만 14세 미만은 서비스 이용이 불가합니다.
                        </dd>
                    </dl>
                    <dl className="chk_dl">
                        <dt>
                            컨버스 공식 온라인 스토어 회원 약관 및 개인정보 수집•이용에 대한 동의
                        </dt>
                        <dd>
                            <input type="checkbox" className='chk' name={"personal_info"} id="chk_personal_info"/>
                            <label htmlFor="chk_personal_info">(필수) 이용 약관에 대한 동의</label>
                        </dd>
                        <dd>
                            <input type="checkbox" className='chk' name={"user_info"} id="chk_user_info"/>
                            <label htmlFor="chk_user_info">(필수) 개인정보 수집 및 이용에 대한 동의</label>
                        </dd>
                    </dl>
                    <dl className="chk_dl">
                        <dt>
                            광고성 정보 수신 동의
                            <span>(회원 전용 다양한 이벤트 소식을 받아보세요)</span>
                        </dt>
                        <dd>
                            <input type="checkbox" className='chk' name="service_event" id="chk_service_event"/>
                            <label htmlFor="chk_service_event">(선택) 이벤트 수신 동의</label>
                        </dd>
                        <dd>
                            <input type="checkbox" className='chk' name="service_message" id="chk_service_message"/>
                            <label htmlFor="chk_service_message">(선택) 문자 수신동의</label>
                        </dd>
                    </dl>
                    <button onClick={join_submit} className="btn_submit" type="button">회원가입하기 (만 14세 이상)</button>
                </div>
            </div>
        </form>
    </section>
    );
};
  
export default RegisterPage;
