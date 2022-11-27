import React from 'react'


//css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'

import SideMenu from '../components/SideMenu';

// const [img, setImg] = useState([])
// const [previewImg, setPreviewImg] = useState([])

const ProductRgst = () => {

    const insertImg = (e) => {
      let reader = new FileReader()

      if(e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0])
      }

      reader.onloadend = () => {
        const previewImgUrl = reader.result

        console.log(previewImgUrl)
      }
    }
    return (
      <div className='wrap'>
      <SideMenu/>
      <div className="container">
       
        <div className="top"> 
            <div className="title">
                <h2>상품 등록</h2> 
                <div className="button_box">                    
                    <button type="button" onClick="{}">등록</button>
                </div>                               
            </div>            
        </div>
        
        <div className="contents_area cate">
            <form>                
                <h3 className="line">카테고리 선택</h3>
                <div className="box_cont">                
                    <div className="row">
                        <div className="col100">
                            <ul>
                                <li>대분류</li>
                                <li>
                                    <select>
                                        <option>욕실</option>                                        
                                    </select>
                                </li>
                                <li>소분류</li>
                                <li>
                                    <select>
                                        <option>선택하세요</option>
                                        <option>└ 치약</option>
                                        <option>└ 샴푸바</option>                                  
                                    </select>
                                </li>
                            </ul>
                        </div>                        
                    </div>                        
                </div> 

                <h3 className="line">상품 기본 정보</h3> 
                <div className="box_cont">     
                    <div className="row">
                        <div className="col">상품명</div>
                        <div className="col">
                            <p>30자 내외로 입력하세요</p>
                            <input className="" type="text" name="" placeholder=""/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">상품 소개 문구</div>
                        <div className="col">
                            <p>100자 내외로 입력하세요</p>
                            <input className="" type="text" name="" placeholder=""/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">상품유형</div>
                        <div className="col">  
                            <div className="prt">
                                <label>                      
                                    <input type="radio" id="" name="evt" checked="checked" /> 없음
                                </label>  
                                <label>                    
                                    <input type="radio" id="" name="evt" /> NEW
                                </label>
                                <label>                    
                                    <input type="radio" id="" name="evt" /> SALE
                                </label>
                                <label>                    
                                    <input type="radio" id="" name="evt" /> BIG SALE
                                </label>
                                <label>                    
                                    <input type="radio" id="" name="evt" /> HOT
                                </label>
                            </div>
                        </div>
                    </div>  
                </div> 

                <h3 className="line">상품 상세 정보</h3> 
                <div className="box_cont"> 
                    <div className="row">
                        <div className="col">상품상세 정보</div>
                        <div className="col">
                            <p className="t_mint">권장 이미지 사이즈  : 가로 1200px / 세로 : 자유</p>   
                            <div className="sm_editor">
                            </div>                                      
                        </div> 
                    </div>  
                </div>

                <h3 className="line">가격/옵션 설정</h3> 
                <div className="box_cont"> 
                    <div className="row">
                        <div className="col">판매가</div>
                        <div className="col">
                            <div className="price">
                                <input type="number" name="" placeholder=""/> 원
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">상품품절</div>
                        <div className="col">                            
                            <p className="t_mint">판매를 중단하거나 재고가 없을 경우 체크하여 품절 표기 하세요</p>
                            <label>
                                <input type="checkbox" id=""/>품절처리
                            </label>   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">상품 선택 옵션</div>
                        <div className="col">
                            
                            <ul className="opt">
                                <li>
                                    <div className="title">
                                        옵션1 명칭 입력                                        
                                    </div>
                                    <input className="" type="text" name="" placeholder=""/>
                                </li>
                                <li>
                                    <div className="title">
                                        옵션1 항목                                        
                                    </div>
                                    <input className="" type="text" name="" placeholder=""/>
                                </li>
                            </ul>                            
                            <ul className="opt">
                                <li>
                                    <div className="title">
                                        옵션2 명칭 입력                                        
                                    </div>
                                    <input className="" type="text" name="" placeholder=""/>
                                </li>
                                <li>
                                    <div className="title">
                                        옵션2 항목                                        
                                    </div>
                                    <input className="" type="text" name="" placeholder=""/>
                                </li>
                            </ul>
                            <button type="button" className="btn blk mt20 mb20" onClick="">옵션 목록 생성</button>
                            <div className="opt_list">
                                <div className="title">옵션 목록</div>
                                <button type="button" className="btn blk-ln mb10" onClick="">선택 삭제</button>
                                <div className="board">
                                    <table className="option">
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" className="mg00" id=""/></th>
                                                <th>옵션명</th>
                                                <th>추가금액</th>
                                                <th>재고수량</th>
                                                <th>사용여부</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" className="mg00" id=""/></td>
                                                <td className="opt_title"><div>S  빨</div></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td>
                                                    <select>
                                                        <option>사용</option>
                                                        <option>미사용</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="mg00" id=""/></td>
                                                <td className="opt_title"><div>S  주</div></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td>
                                                    <select>
                                                        <option>사용</option>
                                                        <option>미사용</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="mg00" id=""/></td>
                                                <td className="opt_title"><div>M  빨</div></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td>
                                                    <select>
                                                        <option>사용</option>
                                                        <option>미사용</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="mg00" id=""/></td>
                                                <td className="opt_title"><div>M  주</div></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td><input type="number" name="" placeholder=""/></td>
                                                <td>
                                                    <select>
                                                        <option>사용</option>
                                                        <option>미사용</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="line">상품 이미지 등록</h3> 
                <div className="box_cont prd_img"> 
                    <div className="box_guide">
                        <p>상품 상세페이지에 들어가는 이미지 입니다. </p>
                        <p>상세페이지의 상품 이미지를 5개 까지 등록 가능합니다.</p>
                        <p className="t_blk">첫번째 이미지가 상품의 목록이미지로 등록됩니다.</p>                        
                        <p className="t_red mt20">이미지 사이즈 : 600*517(1200*1034)</p>                                            
                    </div>
                    <label htmlFor='file'>이미지업로드</label>
                    <input type="file" id='file' accept='image/jpg, image/jpeg, image/png' onChange={(e) => insertImg(e)} />
                </div>
            </form>
        </div>

    </div>
    </div>
    );
};
  
export default ProductRgst;