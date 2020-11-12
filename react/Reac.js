import React from 'react'

const Reac=(props)=> {
  return (
    <div style={{textAlign:'center'}}>
      <h2>React</h2>
      <p>用于构造</p>
      <div>
        <button onClick={()=>props.history.push('/Reac')}>快速开始</button>
        <button onClick={()=>props.history.push('/Teach')}>入门教程</button>
      </div>
    </div>
  )
}
export default Reac;