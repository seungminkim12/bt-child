import React, { useState } from 'react'

//css
import '../../../../css/admin/reset_adm.css'
import '../../../../css/admin/layout_adm.css'
import '../../../../css/admin/style_adm.css'

import SideMenu from '../components/SideMenu';

const ProductRgst = () => {
  
    //파일 업로드 대표이미지  
    const [showImages, setShowImages] = useState([]);

    //대표 이미지 상대경로 저장
    const handleAddImages = (event) => {
      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }

      if (imageUrlLists.length < 5) {
        imageUrlLists = imageUrlLists.slice(0, 5);
      }else{
        alert('최대 5장 까지만 업로드 가능합니다.')
      }

      setShowImages(imageUrlLists);
    };

    console.log(showImages)

    //파일 업로드 상세 페이지  
    const [showDetileImages, setShowDetileImages] = useState([]);

    //대표 이미지 상대경로 저장
    const handleDetileAddImages = (event) => {
      const imageDtLists = event.target.files;
      let imageUrlDtLists = [...showDetileImages];
      for (let i = 0; i < imageDtLists.length; i++) {
        const currentDtImageUrl = URL.createObjectURL(imageDtLists[i]);
        imageUrlDtLists.push(currentDtImageUrl);
      }

      if (imageUrlDtLists.length < 5) {
        imageUrlDtLists = imageUrlDtLists.slice(0, 5);
      }else{
        alert('최대 5장 까지만 업로드 가능합니다.')
      }


      setShowDetileImages(imageUrlDtLists);
    };

    //console.log(showDetileImages)

    // 대표이미지 X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
      setShowImages(showImages.filter((_, index) => index !== id));
    };

    // 상세 페이지 X버튼 클릭 시 이미지 삭제
    const DtDeleteImage = (id) => {
      setShowDetileImages(showDetileImages.filter((_, index) => index !== id))
    };
    
    
    return (
      <div className='wrap'>
      <SideMenu/>
      <div className="container">
       
        <div className="top"> 
            <div className="title">
                <h2>상품 등록</h2> 
                <div className="button_box">                    
                    <button type="button">등록</button>
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
                                        <option>50s</option>                                        
                                    </select>
                                </li>
                                <li>소분류</li>
                                <li>
                                    <select>
                                        <option>선택하세요</option>
                                        <option>└ 빈티지 50s</option>
                                        <option>└ 빈티지 70s</option>                                  
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
                </div> 

                <h3 className="line">상품 상세 정보</h3> 
                <div className="box_cont"> 
                    <div className="row">
                        <div className="col">대표이미지</div>
                        <div className="col">
                            {/* <p className="t_mint">5장까지 가능합니다.</p>    */}
                            <div className="sm_editor">
                            <label htmlFor='file1' className='blk-ln'>이미지업로드</label>
                            <input id="file1" type="file" multiple accept='.jpg,.jpeg,.png' onChange={handleAddImages} />       
                            {/* 저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */}
                            {showImages.map((image, id) => (
                                <div className="preview" key={id}>
                                  <img src={image} alt={`${image}-${id}`} />
                                  <span className='blk-ln' onClick={() => handleDeleteImage(id)}>삭제</span>
                                </div>
                            ))}   
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
                            {/* <p className="t_mint">판매를 중단하거나 재고가 없을 경우 체크하여 품절 표기 하세요</p> */}
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
                    </div>
                    <label htmlFor='file' className='blk-ln'>이미지업로드</label>
                    <input id="file" type="file" multiple accept='.jpg,.jpeg,.png' onChange={handleDetileAddImages} />       
                    {/*저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */}
                    <div>
                    {showDetileImages.map((image, id) => (
                        <div className="preview" key={id}>
                          <img src={image} alt={`${image}-${id}`} />
                          <span onClick={() => DtDeleteImage(id)}>삭제</span>
                        </div>
                    ))}       
                    </div>
                </div>
            </form>
        </div>

    </div>
    </div>
    );
};
  
export default ProductRgst;