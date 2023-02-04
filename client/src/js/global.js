let store = {
  _isLogin : false,

    /**
     * 
     * @param {Boolean} _isActive 
     * 액티브 토큰을 저장하는지에 대한 여부 (true 일시 accessTocken 을 저장)
     * @param {*} token 
     * 저장할 토큰값
     */
  setCookie : (_isAccess,token) => {
      var date = new Date();
      date.setTime(date.getTime() + 1*24*60*60*1000);
      new Promise((resolve,reject)=>{
          if(_isAccess){
              document.cookie = `accessToken = ${token}`
              resolve()
          }
          else {
              document.cookie = `refreshToken = ${token}`
              resolve()
          }
      })
  },

  /** 저장된 로그인 쿠키값 확인 */
  getCookie : () => {
    return new Promise((resolve,reject)=>{
      let _accessToken = document.cookie.match(new RegExp(
        "(?:^|; )" + "accessToken".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    let _refreshToken = document.cookie.match(new RegExp(
        "(?:^|; )" + "refreshToken".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));


    if(_accessToken == null && _refreshToken == null){
      reject("token null")
    } 
    else {
        if(_accessToken == null){
          reject("accessToken null")
        }
        
        if(_refreshToken == null){
          reject("refreshToken null")
        }

        if(_accessToken != null && _refreshToken != null){
          resolve({accessToken:_accessToken[1], refreshToken : _refreshToken[1]})
        }
    }
    })
  },

  /** 쿠키값 삭제 */
  deleteCookie : (name) => {
    return new Promise((resolve,reject)=>{
      document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
      resolve()
    })
    
  },

  /**
   * 로그인 성공시 토큰을 로컬 스토리지에 저장
   * @param {Object} obj {accessToken, refreshToken} 
   * 
   * token 이 들어있는 obj를 encode 해서 로컬스토리지에 저장
   */
  setToken: (obj) => {
    return new Promise((resolve,reject)=>{
      if(obj.accessToken == undefined || obj.refreshToken == null){
        reject({type:"token undefined",message:"토큰값이 없음"})
      }
      else {
        if(obj.accessToken == null){
          reject({type:"accessToken null",message:"accessToken 값이 넘어오지 않음"})
        } 
        else if(obj.refreshToken == null){
          reject({type:"refreshToken null",message:"refreshToken 값이 넘어오지 않음"})
        }
        else {
          console.log("resove",obj)
          resolve(sessionStorage.setItem("bt-child",encodeURIComponent(JSON.stringify(obj))))
        }
      }
    })
    
  },

  /**
   * 로컬스토리지 에 저장된 값을 가져옴 (저장된 값을 decode => parse 하고 반환)
   * 
   * @param {String} name 저장된 로컬스토리지 이름 
   * 
   * @returns {Object} {accessToken, refreshToken}
   */
  getToken: (name) => {
    let _name = sessionStorage.getItem(name)  
    /** encode 된 객체를 decode 함 */
    let _decode = decodeURIComponent(_name)

    let _parse = JSON.parse(_decode)

    return _parse
  },

  /**
   * 토큰 삭제
   * 
   * @param {String} name 로컬스토리지에 저장된 이름
   */
  deleteToken : (name) => {
    sessionStorage.clear(name)
  },

  /**
   * 세션값 확인
   * @param {Objeect} token access, refresh
   * 
   * @returns {Object} 토큰이 들어있는 obj를 배열안에 넣어서 리턴
   */
  getSession : (token) => {
    return new Promise((resolve,reject)=>{
        if(token === null) reject({type:"token null",message:"토큰이 넘어오지 않음"})

        fetch("/api/sessions",{
          method:"get",
          headers: {
              "X-Powered-By":"Express",
              "Content-Type":"application/json; charset=utf-8",
              "ETag":'W/"2f-tVeQsHeD5w7sUHaMuEfYDyucLG0"',
              "Date":new Date().toUTCString(),
              "Connection":"keep-alive",
              "Keep-Alive":"timeout=5",
              "user-agent":navigator.userAgent,
              "Authorization": token,
              // "x-refresh":tokenObj.refreshToken
          },
      })
      .then((response) => response.json())
      .then((rs)=>{
        resolve(rs)
      })
      .catch((err) => {
        reject(err)
      })
    })
  },

  /**
   * 로그인 로직
   * 
   * 실패시 err 객체를 리젝트함
   * 
   * @param {String} _id 
   * @param {String} _pw 
   */
  Login: function(_id,_pw) {
    return new Promise((resolve,reject)=>{
        if(_id === "") reject({type:"아이디 미입력",message:"아이디를 입력하지않음"})
        if(_pw === "") reject({type:"비밀번호 미입력",message:"비밀번호를 입력하지않음"})

        fetch("/api/sessions",{
          headers: {
              "X-Powered-By":"Express",
              "Content-Type":"application/json; charset=utf-8",
              "ETag":'W/"2f-tVeQsHeD5w7sUHaMuEfYDyucLG0"',
              "Date":new Date().toUTCString(),
              "Connection":"keep-alive",
              "Keep-Alive":"timeout=5",
              "user-agent":navigator.userAgent
          },
          method:"POST",
          body:JSON.stringify({
              email:_id,
              password: _pw
          })
      })
      .then((response) => response.json())
      .then((rs)=>{
          // Promise.all([
          //     this.setCookie(true, rs.accessToken),
          //     this.setCookie(false, rs.refreshToken)
          // ]).then(()=>{
          //     resolve()
          // })

          store.setToken(rs)
          .then((rs)=>{
            console.log("rs",rs)
            resolve()
          })
          .catch((err)=>{
            console.log("err",err)
            reject({type:err.type,message:err.message})
          })
      })
      .catch(err=>{
          console.log("login err",err)
          reject({type:"로그인 실패", message : "계정이 올바르지 않음 , 아이디나 비번 확인하셈"})
      })      
    })
  },

  /**
   * 로그아웃
   * @param {Object} token access, refresh 
   * @returns {Object} 빈객체를 리턴함
   */
  Logout: (token) => {
    return new Promise((resolve,reject)=>{
      fetch("/api/sessions",{
        method:"DELETE",
        headers: {
          "X-Powered-By":"Express",
          "Content-Type":"application/json; charset=utf-8",
          "ETag":'W/"2f-tVeQsHeD5w7sUHaMuEfYDyucLG0"',
          "Date":new Date().toUTCString(),
          "Connection":"keep-alive",
          "Keep-Alive":"timeout=5",
          "user-agent":navigator.userAgent,
          "Authorization": token,
        }
      })
      .then(response => response.json())
      .then(rs=>{
        sessionStorage.clear("bt-child");
        resolve({type:rs, message:"로그아웃 완료"})
      })
      .catch(err=>{
        reject(err)
      })
    })
  },

  toast: {
    setCss: (element) => {
      element.style.position = "fixed";
      element.style.top=0;
      element.style.left=0
      element.style.width = "100%";
      element.style.height = "100%";
      element.style.backgroundColor="rgba(0,0,0,0.6)"
      element.style.zIndex = "99999";

      element.querySelector(".inner").style.position = "absolute"
      element.querySelector(".inner").style.top = "50%";
      element.querySelector(".inner").style.left = "50%";
      element.querySelector(".inner").style.transform = "translate(-50%,-50%)";
      element.querySelector(".inner").style.display = "block";
      element.querySelector(".inner").style.padding = "40px 80px";
      element.querySelector(".inner").style.textAlign = "center";
      element.querySelector(".inner").style.background = "#fff";

      element.querySelector("dt").style.fontSize = "26px";
      element.querySelector("dd").style.margin = "20px 0 40px";
      element.querySelector("dd").style.fontSize = "18px";


      element.querySelector(".btn_close").style.display="inloine-block"
      element.querySelector(".btn_close").style.padding="10px 20px"
      element.querySelector(".btn_close").style.fontSize="16px"
      element.querySelector(".btn_close").style.color="#fff"
      element.querySelector(".btn_close").style.background="#000"
    },

    alert: (title,txt) => {
      if(document.getElementById("toast") != null){
        return 
      }

      let div = document.createElement("div");
      let temp = 
      `
       <div class="inner">
         <dl>
            <dt>${title}</dt>
            <dd>${txt}</dd>
         </dl>
         <button class="btn_close">확인</button>
       </div>
      `
      ;

      div.setAttribute("id","toast")


      div.innerHTML=temp;
      document.body.append(div);

      store.toast.setCss(div)

      div.addEventListener("click",(e)=>{
        if(e.target.className === "btn_close" || e.target.id === "toast"){
          div.remove();
        }
      })
    }
  }

}

export default store