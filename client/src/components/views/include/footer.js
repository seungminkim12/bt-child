import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
        return (
            <footer id="footer">
                <ul className="footerList clearFix">
                    <li>
                        <h3>FOLLOW US</h3>
                        <ul className="footerDepth">
                            <li><Link><i className="xi-facebook"></i></Link></li>
                            <li><Link><i className="xi-instagram"></i></Link></li>
                        </ul>
                    </li>
                    <li>
                        <h3>SUPPORT</h3>
                        <ul className="footerDepth">
                            <li><Link>고객지원센터</Link></li>
                            <li><Link>1:1 문의</Link></li>
                            <li><Link>주문/배송 조회</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h3>INFORMATION</h3>
                        <ul className="footerDepth">
                            <li><Link>컨버스에 대하여</Link></li>
                            <li><Link>회원가입</Link></li>
                            <li><Link>매장안내</Link></li>
                            <li><Link>공지사항</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h3>POLICY</h3>
                        <ul className="footerDepth">
                            <li><Link>이용약관</Link></li>
                            <li><Link>개인정보처리방침</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h3>FAMILY SITES</h3>
                        <ul className="footerDepth">
                            <li><Link>NIKE</Link></li>
                            <li><Link>Jordan</Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="container">
                    <div className="inner clearFix">
                        <address>
                            <div className="top">
                                <span>(유)컨버스코리아</span>
                                <span>대표 주형준</span>
                                <span>개인정보책임 주형준</span>
                                <span>사업자등록번호 220-88-74818</span>
                            </div>
                            <div className="middle">
                                <span>통신판매업 신고번호: 제2016-서울강남-00478호</span>
                                <span><Link>통신판매업자 신원정보 확인 </Link></span>
                            </div>
                            <span>주소: 서울시 강남구 테헤란로 152 강남파이낸스센터 32F</span>
                            <div className="bottom">
                                <span>
                                    고객상담팀: 080-987-0182 (상담시간 월-금 : AM 09:00 - PM 05:30, 주말/공휴일 휴무)
                                </span>
                                <span><Link>conversekorea@converse.co.kr</Link> (24시간 접수 가능)</span>
                            </div>
                            <p className="copy">2020 Converse Korea LLC. All Rights Reserved.</p>
                        </address>
                        <dl>
                            <dt>소비자피해 보증보험</dt>
                            <dd>
                                고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한<br/>
                                구매안전서비스 소비자피해보증보험 서비스를 이용하실 수 있습니다.<br/>
                                보증대상: 미배송, 반품/환불거부, 쇼핑몰 부도
                            </dd>
                            <dd><Link>보증보험 가입사실 확인하기</Link></dd>
                        </dl>
                    </div>
                </div>
            </footer>
        )
    }

export default Footer;
