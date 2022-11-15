import React from 'react'
import { Link } from 'react-router-dom';
/** 비디오 링크 */
import videoSrc from "../../../img/index/section01/video.mp4"

import "../../../css/reset.css"
import "../../../css/layout.css"
import "../../../css/response.css"

const Home = () => {
    return (
      <main id="main">
        <section id="section01">
            <h2 className="hidden">section01</h2>
            <ul className="contents clearFix">
                <li>
                    <div className="contentBox">
                        <video muted autoPlay loop playsInline>
                            <source src={videoSrc} type="video/mp4"/>
                        </video>
                    </div>
                    <dl>
                        <dt>
                            NEW SEASON<br/>
                            NEW CHUCK 70
                        </dt>
                        <dd>
                            다채로운 컬러와 다양한 소재를 사용해 <br/>
                            새로운 모습으로 탄생한 척 70을 선보입니다.
                        </dd>
                        <dd className="btnMore">
                            <Link>더 알아보기</Link>
                        </dd>
                    </dl>
                </li>
                <li>
                    <Link>
                        <h3>
                            BEST SELLER<br/>
                            NEW ARRIVAL
                        </h3>
                        <div className="btnWish">
                            <i className="xi-heart-o"></i>
                            <i className="xi-heart"></i>
                        </div>
                        <div className="contentBox">
                            <img src={require("../../../img/index/section01/01.jpg")} alt="척 70 시즈널 레더"/>
                        </div>
                        <div className="hoverBox">
                            <img src={require("../../../img/index/section01/01_hover.jpg")} alt="척 70 시즈널 레더_hover"/>
                        </div>
                        <dl>
                            <dt>척 70 시즈널 레더</dt>
                            <dd>105,000 원</dd>
                        </dl>
                    </Link>
                </li>
                <li>
                    <Link>
                        <h3>
                            BEST SELLER<br/>
                            NEW ARRIVAL
                        </h3>
                        <div className="btnWish">
                            <i className="xi-heart-o"></i>
                            <i className="xi-heart"></i>
                        </div>
                        <div className="contentBox">
                            <img src={require("../../../img/index/section01/02.jpg")} alt="척 70 시즈널 스웨이드"/>
                        </div>
                        <div className="hoverBox">
                            <img src={require("../../../img/index/section01/02_hover.jpg")} alt="척 70 시즈널 스웨이드_hover"/>
                        </div>
                        <dl>
                            <dt>척 70 시즈널 스웨이드</dt>
                            <dd>105,000 원</dd>
                        </dl>
                    </Link>
                </li>
                <li>
                    <Link>
                        <h3>
                            NEW ARRIVAL<br/>
                            ONLINE ONLY
                        </h3>
                        <div className="btnWish">
                            <i className="xi-heart-o"></i>
                            <i className="xi-heart"></i>
                        </div>
                        <div className="contentBox">
                            <img src={require("../../../img/index/section01/03.jpg")} alt="척70 시즈널 캔버스"/>
                        </div>
                        <div className="hoverBox">
                            <img src={require("../../../img/index/section01/03_hover.jpg")} alt="척70 시즈널 캔버스_hover"/>
                        </div>
                        <dl>
                            <dt>척70 시즈널 캔버스</dt>
                            <dd>95,000 원</dd>
                        </dl>
                    </Link>
                </li>
                <li>
                    <Link>
                        <h3>NEW ARRIVAL</h3>
                        <div className="btnWish">
                            <i className="xi-heart-o"></i>
                            <i className="xi-heart"></i>
                        </div>
                        <div className="contentBox">
                            <img src={require("../../../img/index/section01/04.jpg")} alt="척70 시즈널 캔버스"/>
                        </div>
                        <div className="hoverBox">
                            <img src={require("../../../img/index/section01/04_hover.jpg")} alt="척70 시즈널 캔버스_hover"/>
                        </div>
                        <dl>
                            <dt>척70 시즈널 캔버스</dt>
                            <dd>95,000 원</dd>
                        </dl>
                    </Link>
                </li>
            </ul>
        </section>
        <section id="section02">
            <h2 className="hidden">section02</h2>
            <article className="item">
                <div className="title">
                    <h3>CHOOSE YOUR ICON</h3>
                    <Link className="btnMore">
                        <i className="xi-arrow-right"></i>
                        <span>바로가기</span>
                    </Link>
                </div>
                <ul className="itemList clearFix">
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section02/01.jpg")} alt="척테일러 올스타"/>
                            </div>
                            <h3>척테일러 올스타</h3>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section02/02.jpg")} alt="척 70"/>
                            </div>
                            <h3>척 70</h3>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section02/03.jpg")} alt="원스타"/>
                            </div>
                            <h3>원스타</h3>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section02/04.jpg")} alt="잭퍼셀"/>
                            </div>
                            <h3>잭퍼셀</h3>
                        </Link>
                    </li>
                </ul>
            </article>
            <Link className="responseBtn">신발 전체 보기</Link>
        </section>
        <section id="section03">
            <h2 className="hidden">section03</h2>
            <article className="box01">
                <h2 className="hidden">box01</h2>
                <ul className="clearFix">
                    <li>
                        <div className="imgBox">
                            <img src={require("../../../img/index/section03/box01_01.jpg")} alt="LIFT CLEAN LEATHER"/>
                        </div>
                        <dl>
                            <dt>LIFT CLEAN LEATHER</dt>
                            <dd>
                                패션의 계절 가을,<br/>
                                컨버스 리프트 클린 레더와 함께하세요.
                            </dd>
                            <dd className="btnMore">
                                <Link>구매하기</Link>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section03/box01_02.jpg")} alt="척테일러 올스타 리프트 클린 레더 블랙"/>
                            </div>
                            <h3>척테일러 올스타 리프트 클린 레더 블랙</h3>
                            <div className="hoverTxt">
                                <p>구매 하기</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section03/box01_03.jpg")} alt="척테일러 올스타 리프트 클린 레더 화이트"/>
                            </div>
                            <h3>척테일러 올스타 리프트 클린 레더 화이트</h3>
                            <div className="hoverTxt">
                                <p>구매 하기</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </article>
            <article className="box02">
                <h2 className="hidden">box02</h2>
                <ul className="clearFix">
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section03/box02_01.jpg")} alt="척 70 빈티지 캔버스 새들"/>
                            </div>
                            <h3>척 70 빈티지 캔버스 새들</h3>
                            <div className="hoverTxt">
                                <p>구매 하기</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="imgBox">
                            <img src={require("../../../img/index/section03/box02_02.jpg")} alt="TRENDING NOW"/>
                        </div>
                        <dl>
                            <dt>
                                TRENDING NOW
                            </dt>
                            <dd>
                                쌀쌀해진 가을에 어울리는 척 70 컬러웨이,<br/> 새들과 모노크롬블랙으로 트렌디한 코디를 완성하세요.
                            </dd>
                            <dd className="btnMore">
                                <Link>구매하기</Link>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <Link>
                            <h3>
                                BEST SELLER<br/>
                                NEW ARRIVAL
                            </h3>
                            <div className="btnWish">
                                <i className="xi-heart-o"></i>
                                <i className="xi-heart"></i>
                            </div>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section03/box02_03.jpg")} alt="척 70 시즈널 컬러 high"/>
                            </div>
                            <div className="hoverBox">
                                <img src={require("../../../img/index/section03/box02_03_hover.jpg")} alt="척 70 시즈널 컬러 high_hover"/>
                            </div>
                            <dl>
                                <dt>척 70 시즈널 레더</dt>
                                <dd>85,500 원</dd>
                            </dl>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <h3>
                                BEST SELLER<br/>
                                NEW ARRIVAL
                            </h3>
                            <div className="btnWish">
                                <i className="xi-heart-o"></i>
                                <i className="xi-heart"></i>
                            </div>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section03/box02_04.jpg")} alt="척 70 시즈널 컬러 row"/>
                            </div>
                            <div className="hoverBox">
                                <img src={require("../../../img/index/section03/box02_04_hover.jpg")} alt="척 70 시즈널 컬러 row_hover"/>
                            </div>
                            <dl>
                                <dt>척 70 시즈널 레더</dt>
                                <dd>80,100 원</dd>
                            </dl>
                        </Link>
                    </li>
                </ul>
            </article>
            <article className="box03">
                <h2 className="hidden">box03</h2>
                <ul className="clearFix">
                    <li>
                        <div className="imgBox">
                            <img src={require("../../../img/index/section03/box03_01.jpg")} alt=""/>
                        </div>
                        <dl>
                            <dt>
                                CONVERSE <br/>
                                SPECIAL OFFER
                            </dt>
                            <dd>
                                컨버스 온라인 스토어와 함께하는 스페셜 오퍼!<br/>
                                다양한 제품을 더욱 특별한 혜택으로 만나보세요.
                            </dd>
                        </dl>
                        <ul className="btnList">
                            <li><Link>신발</Link></li>
                            <li><Link>의류&악세서리</Link></li>
                            <li><Link>아동</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section03/box03_02.jpg")} alt=""/>
                            </div>
                            <h3>척 70 시즈널 컬러 모노크롬</h3>
                            <div className="hoverTxt">
                                <p>구매 하기</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section03/box03_03.jpg")} alt=""/>
                            </div>
                            <h3>유틸리티 후디 블랙</h3>
                            <div className="hoverTxt">
                                <p>구매 하기</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </article>
        </section>
        <section id="section04">
            <h2 className="hidden">section04</h2>
            <article className="community">
                <h3>CONVERSE COMMUNITY</h3>
                <ul className="communityList clearFix">
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/01.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/02.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/03.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/04.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/05.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/06.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/07.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/08.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/09.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/10.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/11.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/12.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/13.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/14.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/15.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/16.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/17.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/18.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/19.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="imgBox">
                                <img src={require("../../../img/index/section04/20.jpg")} alt=""/>
                            </div>
                            <i className="xi-tag"></i>
                        </Link>
                    </li>
                </ul>
                <button className="btnMore">더보기</button>
            </article>
        </section>
        <section id="section05">
            <h2 className="hidden">section05</h2>
            <article className="marketing">
                <h2 className="hidden">marketing</h2>
                <ul className="marketingList clearFix">
                    <li>
                        <div className="iconBox">
                            <svg viewBox="0 0 54 36">
                                <rect x="21.706" y="8.378" fill="none" width="9.794" height="2.162"></rect>
                                <path fill="none"
                                    d="M39.221,8.378h-2.427v2.162h2.98C39.484,9.852,39.298,9.124,39.221,8.378z"></path>
                                <path fill="none"
                                    d="M40.712,12.163h-3.918v3.243h-0.02l-2.627-2.8l-2.626,2.8H31.5v-3.243h-9.794v16.215h24.882V15.136 C44.194,15.136,42.068,13.965,40.712,12.163z">
                                </path>
                                <path fill="none"
                                    d="M46.588,1.622c-3.211,0-5.823,2.668-5.823,5.946s2.612,5.946,5.823,5.946s5.824-2.667,5.824-5.946 C52.412,4.29,49.799,1.622,46.588,1.622z M48.177,8.839h-5.029V7.232h3.44V3.75h1.589V8.839z">
                                </path>
                                <rect y="10.541" width="16.941" height="1.622"></rect>
                                <rect x="8.471" y="24.595" width="8.471" height="1.621"></rect>
                                <rect x="4.235" y="17.567" width="12.706" height="1.622"></rect>
                                <path
                                    d="M46.588,0c-3.818,0-6.97,2.963-7.367,6.756H20.118V30h28.059V14.956C51.502,14.211,54,11.184,54,7.567 C54,3.395,50.676,0,46.588,0z M36.794,8.378h2.427c0.077,0.745,0.264,1.473,0.554,2.162h-2.98V8.378z M21.706,8.378H31.5v2.162 h-9.794V8.378z M46.588,28.378H21.706V12.163H31.5v3.243h0.021l2.626-2.8l2.627,2.8h0.02v-3.243h3.918 c1.356,1.803,3.482,2.973,5.876,2.973V28.378z M46.588,13.513c-3.211,0-5.823-2.668-5.823-5.946s2.612-5.946,5.823-5.946 s5.824,2.668,5.824,5.946C52.412,10.846,49.799,13.513,46.588,13.513z">
                                </path>
                                <polygon
                                    points="46.588,7.232 43.147,7.232 43.147,8.839 48.177,8.839 48.177,3.75 46.588,3.75">
                                </polygon>
                            </svg>
                        </div>
                        <dl>
                            <dt>무료배송</dt>
                            <dd>
                                5만원 이상 구매 시 무료배송
                            </dd>
                        </dl>
                    </li>

                    <li>
                        <div className="iconBox">
                            <svg viewBox="0 0 36 36">
                                <rect x="21.706" y="8.378" fill="none" width="9.794" height="2.162"></rect>
                                <path
                                    d="M31.645,24.617l0.705,0.767l3.5-3.81c0.194-0.211,0.194-0.554,0-0.767L32.35,17l-0.705,0.773 l2.65,2.878H20v1.088h14.295L31.645,24.617z">
                                </path>
                                <path
                                    d="M36,28.268H21.706l2.649-2.879l-0.709-0.771l-3.5,3.808c-0.194,0.212-0.194,0.555,0,0.768 l3.5,3.808l0.703-0.767l-2.644-2.878H36V28.268z">
                                </path>
                                <path
                                    d="M1.545,25.333V10.111h9.485v3.556h0.022L14,10.707l2.948,2.96h0.022v-3.556h9.485v5.923H28V3H0 v24h16.957v-1.667H1.545z M16.97,4.667h9.485v3.778H16.97V4.667z M1.545,4.667h9.485v3.778H1.545V4.667z">
                                </path>
                            </svg>
                        </div>
                        <dl>
                            <dt>교환/반품 서비스</dt>
                            <dd>
                                사이즈를 잘못 선택하셨나요?<br/>
                                교환/반품 서비스에 대해<br/>
                                더 알아보세요.
                            </dd>
                        </dl>
                        <Link className="btnMore">자세히 보기</Link>
                    </li>

                    <li>
                        <div className="iconBox">
                            <svg viewBox="0 0 86 58">
                                <rect x="21.706" y="8.378" fill="none" width="9.794" height="2.162"></rect>
                                <path
                                    d="M32.021,17.975V8.943l-5.139,7.304l-8.541-2.788l5.355,7.348l-5.268,7.304l8.453-2.79l5.139,7.349v-9.074 l8.63-2.79L32.021,17.975z">
                                </path>
                                <path d="M48.711,0H32.463l18.946,20.808L32.463,41.615h16.248l18.947-20.807L48.711,0z">
                                </path>
                                <path
                                    d="M5.458,50.385c0.744,0,1.477,0.36,1.964,0.963l0.181,0.218l2.299-1.58l-0.206-0.256 c-1.015-1.271-2.568-2.004-4.237-2.004c-2.942,0-5.343,2.299-5.343,5.111s2.4,5.11,5.343,5.11c1.655,0,3.197-0.718,4.212-1.965 l0.205-0.256l-2.299-1.58l-0.18,0.218c-0.501,0.605-1.207,0.95-1.952,0.95c-1.36,0-2.517-1.129-2.517-2.464 C2.94,51.516,4.096,50.385,5.458,50.385z">
                                </path>
                                <polygon
                                    points="30.152,53.453 25.991,48.009 23.347,48.009 23.347,57.64 25.915,57.64 25.915,52.245 29.794,57.64 32.721,57.64 32.721,48.009 30.152,48.009 ">
                                </polygon>
                                <path
                                    d="M40.041,54.867c0,0.075-0.103,0.089-0.154,0.089c-0.038,0-0.114-0.014-0.154-0.104l-2.132-6.843h-2.953 l3.146,9.631h4.199l3.145-9.631h-2.952L40.041,54.867z">
                                </path>
                                <path
                                    d="M63.951,53.71c1.027-0.59,1.618-1.669,1.527-2.85c-0.115-1.606-1.514-2.84-3.185-2.84h-4.919v9.633h2.57 v-3.468H61.1c0.117,0,0.219,0.014,0.295,0.115l1.658,3.353h2.889L63.951,53.71z M62.217,51.604h-2.259v-1.026h2.259 c0.309,0,0.566,0.204,0.566,0.513C62.783,51.399,62.525,51.604,62.217,51.604z">
                                </path>
                                <polygon
                                    points="78.181,57.64 85.885,57.64 85.885,55.071 80.749,55.071 80.749,53.916 85.371,53.916 85.371,51.604 80.749,51.604 80.749,50.577 85.885,50.577 85.885,48.009 78.181,48.009 ">
                                </polygon>
                                <path
                                    d="M72.375,51.643c-1.374-0.309-1.771-0.513-1.771-0.963v-0.025c0-0.36,0.269-0.642,0.936-0.642 c0.887,0,1.605,0.281,2.57,0.859l1.54-1.822c-1.079-0.861-2.376-1.324-4.057-1.324c-2.391,0-3.815,1.336-3.815,3.185v0.027 c0,2.04,1.682,2.645,3.801,3.119c1.35,0.308,1.72,0.539,1.72,0.951v0.025c0,0.424-0.473,0.682-1.218,0.682 c-1.157,0-2.286-0.412-3.263-1.196l-1.554,1.836C68.484,57.447,70.256,58,72.016,58c2.414,0,4.109-1.208,4.109-3.236v-0.025 C76.125,52.875,74.661,52.144,72.375,51.643z">
                                </path>
                                <path
                                    d="M16.142,47.739c-2.876,0-5.213,2.299-5.213,5.111c0,2.824,2.337,5.11,5.213,5.11 c2.877,0,5.215-2.3,5.215-5.11C21.356,50.024,19.019,47.739,16.142,47.739z M16.142,55.289c-1.348,0-2.439-1.09-2.439-2.438 s1.092-2.441,2.439-2.441c1.349,0,2.44,1.093,2.44,2.441S17.49,55.289,16.142,55.289z">
                                </path>
                                <polygon
                                    points="46.975,57.64 54.68,57.64 54.68,55.071 49.542,55.071 49.542,53.916 54.166,53.916 54.166,51.604 49.542,51.604 49.542,50.577 54.68,50.577 54.68,48.009 46.975,48.009 ">
                                </polygon>
                            </svg>
                        </div>
                        <dl>
                            <dt>회원 전용 혜택</dt>
                            <dd>
                                신규 가입 축하 쿠폰, 드로우 응모 등<br/>
                                지금 회원 가입 하시고<br/>
                                더욱 특별한 혜택을 누려보세요.
                            </dd>
                        </dl>
                        <Link className="btnMore">회원 가입 하기</Link>
                    </li>

                    <li>
                        <div className="iconBox">
                            <Link className="iconLink"><i className="xi-facebook"></i></Link>
                            <Link className="iconLink"><i className="xi-instagram"></i></Link>
                        </div>
                        <dl>
                            <dt>Follow Us</dt>
                            <dd>
                                컨버스의 SNS 채널을 통해<br/>
                                신상품 정보 및 이벤트 등 새로운 소식을 확인하세요.
                            </dd>
                        </dl>
                    </li>
                </ul>
            </article>
        </section>
      </main>
      );
};
  
export default Home;