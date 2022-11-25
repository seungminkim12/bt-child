import React, { useEffect } from 'react'
import "../../../css/reset.css"
import "../../../css/layout.css"
import "../../../css/response.css"
import { Link } from 'react-router-dom';


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
        if(!document.getElementById("chk_user_info").checked || !document.getElementById("chk_personal_info").checked){
            alert("필수항목 체크 안함")
        } 
        else {
            fetch("http://localhost:1377/api/users",{
                method:"POST",
                mode: 'no-cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body:JSON.stringify({
                    name:"testPSH",
                    password:"123456",
                    passwordConfirmation:"123456",
                    email:"test1234@nate.com"
                })
            }).then((rs)=>{
                console.log(rs)
            })
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
        <form action="" id="join_form" method="post">
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
                            <input type="text" id="join_pwCheck" name="join_pwCheck" placeholder="비밀번호 입력확인"/>
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
                            <input type="number" name="call_middle" id="call_middle"/>
                            <span></span>
                            <input type="number" name="call_last" id="call_last"/>
                        </li>
                        <li className="birth">
                            <p>*생일/성별은 가입 후 수정이 불가합니다.</p>
                            <div>
                                <input type="number" placeholder="1994"/>
                                <span>년</span>
                                <input type="number"/>
                                <span>월</span>
                                <input type="number"/>
                                <span>일</span>
                            </div>
                        </li>
                        <li className="gender">
                            <label htmlFor="chk_man">
                                <input type="checkbox" name="man" id="chk_man" className="hidden"/>
                                남성
                            </label>
                            <label htmlFor="chk_woman">
                                <input type="checkbox" name="woman" id="chk_woman" className="hidden"/>
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