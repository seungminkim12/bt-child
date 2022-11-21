import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const searchBox_toggle = () => {
        // alert("a")
        document.body.classList.toggle("searchHidden")
        // if(document.body.classList.find(el=>el === "searchHidden")){
        //     alert("a")
        // } else {
        //     alert("b")
        // }
    }

    const gnb_event = (e) => {
        if(e.target.tagName === "A"){
            /** depth02 를 가지고 있는 요소만 */
            if(e.target.nextElementSibling != null){
                document.querySelectorAll(".gnbList .depth02").forEach(el=>{
                    el.classList.remove("active")
                })
                e.target.nextElementSibling.classList.toggle("active");
            }
        }
    }

    const depth_close = (e) => {
        console.log(e.currentTarget.parentNode)
        e.currentTarget.parentNode.classList.remove("active")
    }

    let slide_contents = [
        {
            head:"NEW",
            contents:"척 70 시즈널 스웨이드 출시"
        },
        {
            head:"NEW",
            contents:"척테일러 올스타 리프트 클린 레더 하이 출시"
        },
        {
            head:"PROMOTION",
            contents:"컨버스와 함께하는 스페셜 오퍼 UPTO 40%"
        }
    ]
    let index;

    useEffect(()=>{
        let txtWarpper = document.querySelector("#headerSlide .mask .txtWarp");
        for(let i=0; i<slide_contents.length; i++){
            // let strong = React.createElement(
            //     "strong",
            //     null,
            //     slide_contents[i].head
            // );

            // let li = React.createElement(
            //     "li",
            //     {class:"txtSlide"},
            //     strong,slide_contents.contents
            // )

            let li = document.createElement("li");
            let temp = 
            `
            <span>
                <strong>${slide_contents[i].head}</strong>
                ${slide_contents[i].contents}
            </span>
            `;

            li.setAttribute("class","txtSlide")
            li.innerHTML=temp;

            document.querySelector(".txtWarp").append(li);
        }        

        let currentIndex;
        
        txtWarpper.addEventListener("transitionend",function(){
            if(currentIndex === 1){
                txtWarpper.prepend(txtWarpper.lastElementChild)
            } else {
                txtWarpper.prepend(txtWarpper.firstElementChild)
            }
        
            txtWarpper.style.transition = "none";
            txtWarpper.style.transform = 'translate(0)';
            setTimeout(() => {
                txtWarpper.style.transition = 'all 0.5s';
            });
        },false)
        
        setInterval(() => {
            txtWarpper.style.transform = 'translate(-100%)';
        }, 2000);

    })

    return (
        <> 
            <div id="headerSlide">
                <div className="mask">
                    <ul className="txtWarp">
                        {/* <li className="txtSlide">
                            <span>
                                <strong>NEW</strong>
                                척 70 시즈널 스웨이드 출시
                            </span>
                        </li>
                        <li className="txtSlide">
                            <span>
                                <strong>NEW</strong>
                                척테일러 올스타 리프트 클린 레더 하이 출시
                            </span>
                        </li>
                        <li className="txtSlide">
                            <span>
                                <strong>PROMOTION</strong>
                                컨버스와 함께하는 스페셜 오퍼 UPTO 40%
                            </span>
                        </li> */}
                    </ul>
                </div>
            </div>
            <header id="header">
                <div className="inner">
                    <div id="logo">
                        <Link to={"/"}>
                            <svg viewBox="0 0 805.4 94">
                                <path
                                    d="M724.9 40.6V20.2l-11.6 16.5-19.3-6.3L706.1 47l-11.9 16.5 19.1-6.3 11.6 16.6V53.3l19.5-6.3-19.5-6.4z">
                                </path>
                                <path
                                    d="M762.6 0h-36.7l42.8 47-42.8 47h36.7l42.8-47-42.8-47zm-721 27.5c5.8 0 11.5 2.8 15.3 7.5l1.4 1.7 17.9-12.3-1.6-2c-7.9-9.9-20-15.6-33-15.6C18.7 6.8 0 24.7 0 46.6s18.7 39.8 41.6 39.8c12.9 0 24.9-5.6 32.8-15.3l1.6-2-17.9-12.3-1.4 1.7c-3.9 4.7-9.4 7.4-15.2 7.4-10.6 0-19.6-8.8-19.6-19.2.1-10.4 9.1-19.2 19.7-19.2zm192.3 23.9L201.5 9h-20.6v75h20V42l30.2 42h22.8V9h-20v42.4zm77 11c0 .6-.8.7-1.2.7-.3 0-.9-.1-1.2-.8L291.9 9h-23l24.5 75h32.7l24.5-75h-23l-16.7 53.4zm186.2-9c8-4.6 12.6-13 11.9-22.2-.9-12.5-11.8-22.1-24.8-22.1h-38.3v75h20v-27h9c.9 0 1.7.1 2.3.9l12.9 26.1h22.5l-15.5-30.7zM483.6 37H466v-8h17.6c2.4 0 4.4 1.6 4.4 4s-2 4-4.4 4zm124.3 47h60V64h-40v-9h36V37h-36v-8h40V9h-60v75zm-45.2-46.7c-10.7-2.4-13.8-4-13.8-7.5v-.2c0-2.8 2.1-5 7.3-5 6.9 0 12.5 2.2 20 6.7l12-14.2c-8.4-6.7-18.5-10.3-31.6-10.3-18.6 0-29.7 10.4-29.7 24.8v.2c0 15.9 13.1 20.6 29.6 24.3 10.5 2.4 13.4 4.2 13.4 7.4v.2c0 3.3-3.7 5.3-9.5 5.3-9 0-17.8-3.2-25.4-9.3L522.9 74c9.5 8.5 23.3 12.8 37 12.8 18.8 0 32-9.4 32-25.2v-.2c0-14.5-11.4-20.2-29.2-24.1zM124.8 6.9c-22.4 0-40.6 17.9-40.6 39.8 0 22 18.2 39.8 40.6 39.8 22.4 0 40.6-17.9 40.6-39.8 0-22-18.2-39.8-40.6-39.8zm0 58.8c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19zM364.9 84h60V64h-40v-9h36V37h-36v-8h40V9h-60v75z">
                                </path>
                            </svg>
                        </Link>
                    </div>
                    <button className="gnbBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav id="gnb">
                        <h2 className="hidden">global navigation</h2>
                        <ul className="gnbList" onClick={gnb_event}>
                            <li>
                                <Link className="depth01">신발</Link>
                                <div className="depth02">
                                    <button className="btnClose" onClick={depth_close}>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <ul className="linkList">
                                        <li><Link>전체보기</Link></li>
                                        <li><Link>베스트셀러</Link></li>
                                        <li><Link>척테일러 올스타</Link></li>
                                        <li><Link>척 70</Link></li>
                                        <li><Link>원스타</Link></li>
                                        <li><Link>잭퍼셀</Link></li>
                                        <li><Link>프로레더</Link></li>
                                        <li><Link>회원전용</Link></li>
                                        <li><Link>SALE</Link></li>
                                    </ul>
                                    <div className="item">
                                        <h3>추천 상품</h3>
                                        <ul className="itemList clearFix">
                                            <li>
                                                <Link>
                                                    <div className="imgBox">
                                                        <img src={require("../../../img/header/01.jpg")} alt=""/>
                                                    </div>
                                                    <h3>빅사이즈</h3>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    <div className="imgBox">
                                                        <img src={require("../../../img/header/02.jpg")} alt=""/>
                                                    </div>
                                                    <h3>농구화 컬렉션</h3>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    <div className="imgBox">
                                                        <img src={require("../../../img/header/03.jpg")} alt=""/>
                                                    </div>
                                                    <h3>척 70 라이벌</h3>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    <div className="imgBox">
                                                        <img src={require("../../../img/header/04.jpg")} alt=""/>
                                                    </div>
                                                    <h3>젝퍼셀 핵트 패션</h3>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link className="depth01">의류</Link>
                                <div className="depth02">
                                    <button className="btnClose" onClick={depth_close}>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <div className="inner">
                                        <ul className="linkList">
                                            <li><Link>전체보기</Link></li>
                                            <li><Link>아우터</Link></li>
                                            <li><Link>상의</Link></li>
                                            <li><Link>하의</Link></li>
                                            <li><Link>용품</Link></li>
                                            <li><Link>SALE</Link></li>
                                        </ul>
                                        <div className="item">
                                            <h3>추천 상품</h3>
                                            <ul className="itemList clearFix">
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/05.jpg")} alt=""/>
                                                        </div>
                                                        <h3>컨버스 셰임스</h3>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/06.jpg")} alt=""/>
                                                        </div>
                                                        <h3>척 70 크루 삭스</h3>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/07.jpg")} alt=""/>
                                                        </div>
                                                        <h3>유틸리티 후디</h3>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/08.jpg")} alt=""/>
                                                        </div>
                                                        <h3>스타 쉐브론 팬츠</h3>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link className="depth01">아동</Link>
                                <div className="depth02">
                                    <button className="btnClose" onClick={depth_close}>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <div className="inner">
                                        <ul className="linkList">
                                            <li><Link>전체보기</Link></li>
                                            <li><Link>유아 (165mm이하)</Link></li>
                                            <li><Link>어린이 (215mm이하)</Link></li>
                                            <li><Link>SALE</Link></li>
                                        </ul>
                                        <div className="item">
                                            <h3>추천 상품</h3>
                                            <ul className="itemList clearFix">
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/09.jpg")} alt=""/>
                                                        </div>
                                                        <h3>패싱 노트</h3>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/10.jpg")} alt=""/>
                                                        </div>
                                                        <h3>수퍼플레이 NU 인펀트</h3>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/11.jpg")} alt=""/>
                                                        </div>
                                                        <h3>척 70 키즈</h3>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link>
                                                        <div className="imgBox">
                                                            <img src={require("../../../img/header/12.jpg")} alt=""/>
                                                        </div>
                                                        <h3>아트 클래스</h3>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link className="depth01">런칭캘린더</Link></li>
                            <li><Link className="depth01">회원전용</Link></li>
                        </ul>
                        <ul className="resizeMenu">
                            <li><Link>마이페이지</Link></li>
                            <li><Link>주문/배송 조회</Link></li>
                            <li><Link>고객지원센터</Link></li>
                            <li><Link>로그인</Link></li>
                            <li><Link>FAMILY SITES</Link></li>
                        </ul>
                        <dl className="resizeGnbFooter">
                            <dt>(유)컨버스 코리아 포트폴리오</dt>
                            <dd>퍼블리싱 100%</dd>
                            <dd>html5</dd>
                            <dd>css/scss</dd>
                            <dd>jquery</dd>
                            <dd>상업용이 아닌 포트폴리오 용으로<br/> 제작된 페이지 임을 알립니다.</dd>
                        </dl>
                    </nav>
                    <div className="util">
                        <ul className="utilMenu">
                            <li>
                                <Link to={'/login'} className="btn_mypage"><i className="xi-user-o"></i></Link>
                                </li>
                            <li>
                                <Link to={'/cart'} className="btn_cart"><i className="xi-cart-o"></i></Link>
                            </li>
                            <li>
                                <Link><i className="xi-heart-o"></i></Link>
                                </li>
                            <li>
                                <Link><i className="xi-help-o"></i></Link>
                                </li>
                            <li>
                                <Link onClick={searchBox_toggle}>
                                    <i className="xi-search"></i>
                                    <i className="xi-close"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="searchBox">
                <div className="container">
                    <div className="inner clearFix">
                        <div className="left">
                            <div className="leftBox01 clearFix">
                                <div className="videoCon">
                                    <Link>
                                        <video muted autoPlay loop playsInline>
                                            <source src={require("../../../img/header/searchBox_video.mp4")} type="video/mp4" />
                                        </video>
                                        <div className="hoverBox">
                                            <p>더 알아보기</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bestSellerCon">
                                    <dl>
                                        <dt>베스트셀러</dt>
                                        <dd><Link><i className="xi-arrow-right"></i>구매하기</Link></dd>
                                    </dl>
                                    <div className="imgBox">
                                        <img src={require("../../../img/header/searchBox_img01.jpg")} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="leftBox02 clearFix">
                                <div className="faqCon">
                                    <dl>
                                        <dt>무엇을 도와드릴까요?</dt>
                                        <dd><Link><i className="xi-arrow-right"></i>FAQ에서 궁금한 내용을 찾아보세요.</Link></dd>
                                    </dl>
                                    <div className="imgBox">
                                        <img src={require("../../../img/header/searchBox_gif.gif")} alt=""/>
                                    </div>
                                </div>
                                <div className="imgCon">
                                    <Link>
                                        <img src={require("../../../img/header/searchBox_img02.jpg")} alt=""/>
                                        <div className="hoverBox">
                                            <p>더 알아보기</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <form action="#" className="searchCon">
                                <h3>검색</h3>
                                <label className="contentsBox">
                                    <input type="search" placeholder="검색어를 입력해주세요" />
                                    <Link title="검색버튼" className="searchBtn">
                                        <i className="xi-search"></i>
                                    </Link>
                                </label>
                            </form>
                            <div className="bestSearch">
                                <h3>인기 검색어</h3>
                                <ul className="bestSearchList">
                                    <li><Link>척테일러</Link></li>
                                    <li><Link>잭퍼셀</Link></li>
                                    <li><Link>척 70</Link></li>
                                    <li><Link>셰입스</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header;