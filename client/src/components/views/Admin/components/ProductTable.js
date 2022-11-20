import React from 'react'

const ProductTables = () => {
    const list = {
        data:[
            { num: "1", cate: "욕실", catewrap: "대분류",exposure:"노출"},
            { num: "2", cate: "욕실", catewrap: "대분류",exposure:"노출"},
            { num: "3", cate: "욕실", catewrap: "대분류",exposure:"노출"},
            { num: "4", cate: "욕실", catewrap: "대분류",exposure:"노출"},
            { num: "5", cate: "욕실", catewrap: "대분류",exposure:"노출"},
            { num: "6", cate: "욕실", catewrap: "대분류",exposure:"노출"}
        ]
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>카테고리명</th>
                    <th>이미지</th>
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
                            <td>{item.catewrap}</td>
                            <td>{item.exposure}</td>
                            <td colSpan="7"></td>
                            <td><button type="button" className="btn-sm-ln">수정</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>  
    );
};
  
export default ProductTables;