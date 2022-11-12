import React from "react";

const Footer = () => {
        return (
            <footer id="footer">
                <ul class="footerList clearFix">
                    <li>
                        <h3>FOLLOW US</h3>
                        <ul class="footerDepth">
                            <li><a href="#"><i class="xi-facebook"></i></a></li>
                            <li><a href="#"><i class="xi-instagram"></i></a></li>
                        </ul>
                    </li>
                    <li>
                        <h3>SUPPORT</h3>
                        <ul class="footerDepth">
                            <li><a href="#">고객지원센터</a></li>
                            <li><a href="#">1:1 문의</a></li>
                            <li><a href="#">주문/배송 조회</a></li>
                        </ul>
                    </li>
                    <li>
                        <h3>INFORMATION</h3>
                        <ul class="footerDepth">
                            <li><a href="#">컨버스에 대하여</a></li>
                            <li><a href="#">회원가입</a></li>
                            <li><a href="#">매장안내</a></li>
                            <li><a href="#">공지사항</a></li>
                        </ul>
                    </li>
                    <li>
                        <h3>POLICY</h3>
                        <ul class="footerDepth">
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">개인정보처리방침</a></li>
                        </ul>
                    </li>
                    <li>
                        <h3>FAMILY SITES</h3>
                        <ul class="footerDepth">
                            <li><a href="#">NIKE</a></li>
                            <li><a href="#">Jordan</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="container">
                    <div class="inner clearFix">
                        <address>
                            <div class="top">
                                <span>(유)컨버스코리아</span>
                                <span>대표 주형준</span>
                                <span>개인정보책임 주형준</span>
                                <span>사업자등록번호 220-88-74818</span>
                            </div>
                            <div class="middle">
                                <span>통신판매업 신고번호: 제2016-서울강남-00478호</span>
                                <span><a href="#">통신판매업자 신원정보 확인 </a></span>
                            </div>
                            <span>주소: 서울시 강남구 테헤란로 152 강남파이낸스센터 32F</span>
                            <div class="bottom">
                                <span>
                                    고객상담팀: 080-987-0182 (상담시간 월-금 : AM 09:00 - PM 05:30, 주말/공휴일 휴무)
                                </span>
                                <span><a href="#">conversekorea@converse.co.kr</a> (24시간 접수 가능)</span>
                            </div>
                            <p class="copy">2020 Converse Korea LLC. All Rights Reserved.</p>
                        </address>
                        <dl>
                            <dt>소비자피해 보증보험</dt>
                            <dd>
                                고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한<br/>
                                구매안전서비스 소비자피해보증보험 서비스를 이용하실 수 있습니다.<br/>
                                보증대상: 미배송, 반품/환불거부, 쇼핑몰 부도
                            </dd>
                            <dd><a href="#">보증보험 가입사실 확인하기</a></dd>
                        </dl>
                    </div>
                </div>
            </footer>
        )
    }

export default Footer;
