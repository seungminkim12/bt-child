import React from 'react'

const ProductTables = () => {
    const list = {
        data:[
            { num: "1", cate: "70s", prdImg: "https://converse.co.kr/web/product/medium/202104/521fe6709dfda8bb8f9d05b4deb17a42.jpg", prdName: "척 70s 빈티지 캔버스 썬플라워", catewrap: "대분류", prdPrice: "20000원",exposure:"노출"},
            { num: "2", cate: "원스타", prdImg: "https://converse.co.kr/web/product/medium/202104/521fe6709dfda8bb8f9d05b4deb17a42.jpg", prdName: "원스타 프로 빈티지 스웨이드 라이트본", catewrap: "대분류",prdPrice: "20000원",exposure:"노출"},
            { num: "3", cate: "원스타", prdImg: "https://converse.co.kr/web/product/medium/202104/521fe6709dfda8bb8f9d05b4deb17a42.jpg", prdName: "원스타 프로 블랙", catewrap: "대분류",prdPrice: "20000원",exposure:"노출"},
            { num: "4", cate: "원스타", prdImg: "https://converse.co.kr/web/product/medium/202104/521fe6709dfda8bb8f9d05b4deb17a42.jpg", prdName: "원스타 프로 빈티지 스웨이드 유틸리티", catewrap: "대분류",prdPrice: "20000원",exposure:"노출"},
            { num: "5", cate: "원스타", prdImg: "https://converse.co.kr/web/product/medium/202104/521fe6709dfda8bb8f9d05b4deb17a42.jpg", prdName: "원스터 파운데이셔널 블랙", catewrap: "대분류",prdPrice: "20000원",exposure:"노출"},
            { num: "6", cate: "원스타", prdImg: "https://converse.co.kr/web/product/medium/202104/521fe6709dfda8bb8f9d05b4deb17a42.jpg", prdName: "척 70s 빈티지 캔버스 아이언", catewrap: "대분류",prdPrice: "20000원",exposure:"노출"}
        ]
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>카테고리명</th>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>상품가격</th>
                    <th>분류</th>
                    <th>노출여부</th>
                    <th colSpan="8">관리</th>
                </tr>
            </thead>
            <tbody>
                {list.data.map((item) => {
                    return (
                        <tr key={item.num}>
                            <td>{item.num}</td>
                            <td>{item.cate}</td>
                            <td><img src={item.prdImg}/></td>
                            <td>{item.prdName}</td>
                            <td>{item.prdPrice}</td>
                            <td>{item.catewrap}</td>
                            <td>{item.exposure}</td>
                            <td><button type="button" className="btn-sm-ln">수정</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>  
    );
};
  
export default ProductTables;