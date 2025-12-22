import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { logout } from '../../service/authLogic'

const Header = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 로그인 성공시 이름이나 혹은 이메일 주소 담기
  const [myName, setMyName] = useState('')
  useEffect(() => {
    setMyName(window.localStorage.getItem("email"))
    /*
    문제제기 - 아래와 같이 isLoggedIn을 무조건 true로 처리한다면
    로그인 상태가 풀렸을 경우 이메일 정보가 null인 경우가 발생할 수도 있다.
    로그인 상태가 풀렸다는 말은 로그아웃버튼을 보여주고 있는데 님 앞에는 빈문자열이
    출력되는 경우가 발생할 수도 있다는 것이다.
    https://firebase.google.com/docs/auth/web/manage-users?hl=ko
    개선하는 방법은 위 페이지에서 로그인이 풀렸는지 여부를 체크하는 함수를 통해 해결해야 한다
    -> 정리함수
    */
    setIsLoggedIn(true)
  },[])
  const handleLogout = () => {
    //로그아웃을 처리하기
    try {
      logout()
      setIsLoggedIn(false);
      setMyName('')
    } catch (error) {
      console.error("로그아웃 실패",error)
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#">도서검색</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">부서관리</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">공지사항</Link>
            </li>
          </ul>

          {/*로그인, 로그아웃, 로그인한 이메일주소*/}
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {!isLoggedIn && (                
              <li className="nav-item" id="login">
                <Link className="nav-link active" to="/login">로그인</Link>
              </li>      
          )}
          {isLoggedIn && (      
            <>      
              <li className="nav-item" id="myEmail">
                <Link className="nav-link">{myName} 님.</Link>
              </li>              
              <li className="nav-item" id="logout">
                <Link className="nav-link" onClick={handleLogout}>로그아웃</Link>
              </li>
            </>
          )}  
            </ul>
          </div>
          {/*로그인, 로그아웃, 로그인한 이메일주소*/}
          
        </div>
      </nav>
    </>
  )
}

export default Header