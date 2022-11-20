import React from 'react'

const ProductTables = () => {
    const list = {
        data:[
            {num:"1",name:"컨버스",userId:"skdlfjlks",phonNum:"01010100101"},
            {num:"2",name:"컨버스",userId:"skdlfjlks",phonNum:"01010100101"},
            {num:"3",name:"컨버스",userId:"skdlfjlks",phonNum:"01010100101"},
            {num:"4",name:"컨버스",userId:"skdlfjlks",phonNum:"01010100101"},
            {num:"5",name:"컨버스",userId:"skdlfjlks",phonNum:"01010100101"},
        ]
    }
    return (
        <table>
            <thead>
                <tr>
                <th><input type="checkbox" class="mg00" id=""/></th>
                <th>번호</th>
                <th>이름</th>
                <th>아이디</th>
                <th colspan="7">휴대폰 번호</th>  
                </tr>
            </thead>
            <tbody>
                {list.data.map((item) => {
                    return (
                        <tr key={item.num}>
                            <td><input type="checkbox" class="mg00" id=""/></td>
                            <td>{item.num}</td>
                            <td>{item.name}</td>
                            <td>{item.userId}</td>
                            <td>{item.phonNum}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>  
    );
};
  
export default ProductTables;