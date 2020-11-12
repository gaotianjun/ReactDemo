import React, { useState } from 'react'
import Mytab from './Mytab';
import './my.css'
import { connect } from 'react-redux'
import {login} from  './LoginCreators.js'
import { ActivityIndicator } from 'antd-mobile'


const My = (props) => {
    const [isShow,setShow]=useState(false);
    const log = () => {
        props.dispatch(login());
    }

    return (
        <div>
            <div className='log'>
                <h1 className='p11'>用户登录</h1>
                <p className='p22'>username:  <input type='text' /></p>
                <p className='p33'>password:   <input type='password' /></p>
                {/*未登录显示登录 ，登录后可退出*/}
                {props.userinfo ?
                    (
                    <button  className='btn11' onClick={ ()=>{
                            props.dispatch({
                                type:'LOGIN',
                                userinfo:''
                            })
                        }}>退出</button>
                    )
                 : <button className='btn11'  onClick={log} >登录</button>
                }
                
                <ActivityIndicator
                toast
                text="登录中..."
                animating={isShow}//登陆状态显示
              />
            </div>
            
            <Mytab />
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        userinfo: state.userinfo
    }
}

export default connect(mapStateToProps)(My)