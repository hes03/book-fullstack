import React from 'react'
import { loginGoogle } from '../../service/authLogic'
import { useNavigate } from 'react-router'

const LoginForm = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    loginGoogle()
    navigate("/")
  }
  return (
    <>
      <h2>로그인화면 </h2> 
      <button type='button' onClick={handleLogin}>구글로그인</button>    
    </> 
  )
}

export default LoginForm
