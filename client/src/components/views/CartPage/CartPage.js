import React from 'react'

const CartPage = () => {
    return (
      <section id="cart">
        <h2 class="hidden">장바구니</h2>
        <article>
            <div class="title">
                <h3>장바구니 (<span>0</span>)</h3>
                <p class="info_txt">신규 회원 가입 시, 즉시 사용 가능한 1만원 프로모션 코드를 발급해드립니다. (일부 상품 할인 제외, 장바구니 5만원 이상 적용 가능)</p>
            </div>
            <div class="cart_box">
                <h2 class="hidden">장바구니 목록</h2>
                <label for="chk_all">
                    <input type="checkbox" id="chk_all"/>
                    전체 선택
                </label>
                <ul class="cart_list">
                    <li class="sale">
                        <input type="checkbox" name="" id=""/>
                        <a href="" class="img_box">
                            <img/>
                        </a>
                        <dl class="info_box">
                            <dt><a href="">상품 이름</a></dt>
                            <dd class="color_size"><span>색상</span> / <span>사이즈</span></dd>
                            <dd class="length">수량<span>1</span></dd>
                            <dd class="btns">
                                <button>
                                    <img class="icon"/> 위시리스트 추가
                                </button>
                                <button>
                                    <img class="icon"/> 나중에 구매하기
                                </button>
                            </dd>
                        </dl>
                        <div class="item_util">
                            <h3><span>109,000원</span> 98,100원</h3>
                            <div class="length_box">
                                <input type="text" value="1" readonly name="item_length"/>
                                <button class="length_minus">-</button>
                                <button class="length_plus">+</button>
                            </div>
                            <button class="btn_option">옵션변경</button>
                            <div class="option_box" style="display: none">
                                <h3>사이즈</h3>
                                <select class="">
                                    <option disabled selected>- [필수]옵션을 선택해 주세요 -</option>
                                    <option>111</option>
                                    <option>222</option>
                                    <option>333</option>
                                </select>
                                <div class="btn_list">
                                    <button class="btn_change">변경</button>
                                    <button class="btn_cancle">취소</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="">
                        <input type="checkbox" name="" id=""/>
                        <a href="" class="img_box">
                            <img/>
                        </a>
                        <dl class="info_box">
                            <dt><a href="">상품 이름</a></dt>
                            <dd class="color_size"><span>색상</span> / <span>사이즈</span></dd>
                            <dd class="length">수량<span>1</span></dd>
                            <dd class="btns">
                                <button>
                                    <img class="icon"/> 위시리스트 추가
                                </button>
                                <button>
                                    <img class="icon"/> 나중에 구매하기
                                </button>
                            </dd>
                        </dl>
                        <div class="item_util">
                            <h3><span>109,000원</span> 98,100원</h3>
                            <div class="length_box">
                                <input type="text" value="1" readonly name="item_length"/>
                                <button class="length_minus">-</button>
                                <button class="length_plus">+</button>
                            </div>
                            <button class="btn_change">옵션변경</button>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        <article class="result_box">
            <h2 class="hidden">주문금액 영역</h2>
            <dl>
                <dt class="bg">주문금액</dt>
                <dd>상품금액<p><span>487,000</span>원</p></dd>
                <dd>배송비<p><span>0</span>원</p></dd>
                <dd>총 할인금액<p><span>487,000</span>원</p></dd>
                <dd class="total">총 결제금액<p><span>487,000</span>원</p></dd>
                <dd class="btn_dd">
                    <button class="btn_submit">전체상품 주문하기</button>
                </dd>
                <dd class="bg info_txt">
                    <a href="">프로모션/쿠폰은 주문페이지에서 확인됩니다.</a>
                </dd>
                <dd class="toggle_info">
                    <button>이용안내</button>
                    <ul>
                        <li>실 결제 금액은 주문서 내 고객님의 쿠폰/할인 적용에 따라 달라집니다.</li>
                        <li>실제 쿠폰코드의 적용여부는 금액에서 확인하여 주세요.</li>
                        <li>적용되지 않는 쿠폰은 등록은 되나 금액은 변동되지 않습니다.</li>
                        <li>프로모션 제품은 중복할인 또는 쿠폰 사용이 불가합니다.</li>
                    </ul>
                </dd>
                <dd class="toggle_info">
                    <button>배송비 안내</button>
                    <ul>
                        <li>총 구매금액이 5만원 이상인 경우,배송비는 무료입니다. (5만원 미만인 경우,배송비 2,500원이 별도 부가됩니다.)</li>
                        <li>장기간 장바구니에 보관하신 상품은 시간이 지남에 따라 가격과 혜택이 변동 될 수 있으며, 최대 30일 동안 보관됩니다.</li>
                    </ul>
                </dd>
            </dl>
            
        </article>
        <dl class="empty_box">
            <dt>장바구니에 담긴 상품이 없습니다.</dt>
            <dd class="txt">척 70, 무브, 척테일러, 원스타, 런스타 등 지금 컨버스의 다양한 상품을 찾아보세요.</dd>
            <dd>
                <a href="">쇼핑 계속하기</a>
            </dd>
        </dl>
    </section>
    );
};
  
export default CartPage;