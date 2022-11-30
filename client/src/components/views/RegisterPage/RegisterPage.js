import React, { useEffect } from 'react'
import "../../../css/reset.css"
import "../../../css/layout.css"
import "../../../css/response.css"
import { Link } from 'react-router-dom';
import axios from "axios"


const RegisterPage = () => {

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
        join_progress(0)
        .then(()=>{
            return join_progress(1)
        })
        .then(()=>{
            return join_progress(2)
        })
        .then(()=>{
            return join_progress(3)
        })
        .then(()=>{
            return join_progress(4)
        })
        .then(()=>{
            return join_progress(5)
        })
        .then(()=>{
            return join_progress(6)
        })
        .then(()=>{
            return join_progress(7)
        })
        .then(()=>{
            let _email = document.getElementById("join_id").value;
            let _password = document.getElementById("join_pw").value;
            let _passwordConfirmation = document.getElementById("join_pwCheck").value;
            let _name = document.getElementById("join_name").value;
            let _phoneNumber = document.getElementById("call_first").value + document.getElementById("call_middle").value + document.getElementById("call_last").value;
            let _birth = `${document.getElementById("join_birthYear").value}.${document.getElementById("join_birthMonth").value}.${document.getElementById("join_birthDate").value}`
            let _gender = document.getElementById("gender_man").checked ? "man" : "woman"
            
            fetch("/api/users",{
                method:"POST",
            // mode: 'cors', // no-cors, cors, *same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // no-referrer, *client
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
                    password: _password,
                    passwordConfirmation: _passwordConfirmation,
                    name: _name,
                    phoneNumber: _phoneNumber,
                    birth: _birth,
                    gender: _gender,
                })
            })
            .then((response) => response.json())
            .then((data) => {
                sessionStorage.setItem("joinComplete",true)
                window.location.href="/login"
            })
            .catch((err1)=>{
                console.log("err1",err1)
            })            
        })
        .catch((err)=>{
            alert(err.msg)
        })

    }

    /**
     * 회원가입 입력 확인
     * @param {Number} type
     * 0 : 이메일 
     * 1 : 비번 
     * 2 : 비번확인 
     * 3 : 이름
     * 4 : 폰번호
     * 5 : 생년월일
     * 6 : 성별체크
     * 7 : 필수체크항목
     */
    const join_progress = (type) => {
        return new Promise((resolve,reject) => {
            let _value;
            /** 이메일 */
            if(type === 0){
                /** 이메일 입력값 */
                _value = document.getElementById("join_id").value;

                /** 이메일 정규식 */
                var regex = /^([0-9a-zA-Z_\-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

                if(_value === ""){
                    reject({errType:"이메일 미입력",msg:"이메일을 입력해 주세요."})
                }
                else if(!regex.test(_value)){
                    reject({errType:"이메일 형식 오류",msg:"이메일 형식에 맞지 않습니다. 올바른 형식으로 입력해 주세요."})
                } 
                else {
                    resolve()
                }
            }
            /** 비번 */
            if(type === 1){
                /** 비밀번호 입력 값 */
                _value = document.getElementById("join_pw").value;

                if(_value === ""){
                    reject({errType:"비밀번호 미입력",msg:"비밀번호를 입력해 주세요."})
                }
                else if(_value.length < 6){
                    reject({errType:"비밀번호 형식 오류",msg:"비밀번호는 6자리 이상 입력해 주세요."})
                }
                else {
                    resolve()
                }
            }
            /** 비번확인 */
            if(type === 2){
                /** 비밀번호 입력한 값 */
                let pw = document.getElementById("join_pw").value
                
                /** 비밀번호 입력확인 값  */
                _value = document.getElementById("join_pwCheck").value;

                if(_value === ""){
                    reject({errType:"비밀번호확인 미입력",msg:"비밀번호를 한번더 입력해 주세요."})
                }
                else if(pw < _value){
                    reject({errType:"비밀번호 확인 오류",msg:"비밀번호가 같지않습니다. 비밀번호를 확인해 주세요."})
                }
                else {
                    resolve()
                }
            }
            /** 이름 */
            if(type === 3){
                /** 비밀번호 입력확인 값  */
                _value = document.getElementById("join_name").value;
                if(_value === ""){
                    reject({errType:"이름 미입력",msg:"이름을 입력해 주세요."})
                } 
                else {
                    resolve()
                }
            }
            /** 폰번호 */
            if(type === 4){
                let middle, last;
                middle = document.getElementById("call_middle").value;
                last = document.getElementById("call_last").value;

                if(middle === "" || last === ""){
                    reject({errType:"휴대폰번호 미입력",msg:"휴대폰 번호를 입력해 주세요."})
                } else {
                    resolve()
                }
            }
            /** 생년월일 */
            if(type === 5){
                /** 비밀번호 입력확인 값  */
                let year,month,date;

                year = document.getElementById("join_birthYear").value;
                month = document.getElementById("join_birthMonth").value;
                date = document.getElementById("join_birthDate").value;
                if(year === "" || month === "" || date === ""){
                    reject({errType:"생년월일 미입력",msg:"생년월일을 입력해 주세요."})
                } 
                else if(month > 12 || date > 31){
                    reject({errType:"생년월일 형식 오류",msg:"생년월일을 확인해 주세요."})
                }
                else {
                    resolve()
                }
            }
            /** 성별체크 */
            if(type === 6){
                /** 남자체크 */
                let gender_man, 
                
                /** 여자체크 */
                gender_woman;

                gender_man = document.getElementById("gender_man").checked
                gender_woman = document.getElementById("gender_woman").checked

                if(!gender_man && !gender_woman){
                    reject({errType:"성별 미체크",msg:"성별을 체크해주세요."})
                } 
                else {
                    resolve()
                }
            }
            /** 필수체크항목 */
            if(type === 7){
                /** 이용약관동의 */
                let user_info, 

                /**개인정보수집 및 이용 동의 */
                personal_info;

                user_info = document.getElementById("chk_user_info").checked;
                personal_info = document.getElementById("chk_personal_info").checked;

                if(!user_info || !personal_info){
                    reject({errType:"필수 항목 미체크",msg:"필수항목을 체크해 주세요."})
                } 
                else {
                    resolve()
                }
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
                        <li><button><img/>카카오 계정으로 1초 로그인</button></li>
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