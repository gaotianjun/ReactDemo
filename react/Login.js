import React from 'react'
//路由配置
//
//
const Login=(props)=> {
  const login=()=>{
    localStorage.setItem('userinfo','tom');
    props.history.replace(props.location.state);
  }
  return (
    <div>
      <button onClick={login}>登录</button>
    </div>
  )
}

export default Login;
