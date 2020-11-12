import { ActivityIndicator } from 'antd-mobile'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from './actionCreators'

const Home = (props) => {
    console.log(props);
    const [isShow,setShow]=useState(false);//前面是属性默认值，后面修改的函数
    const log = () => {
        props.dispatch(login());
        // setShow(true)//登陆时就将其设置成转的
        // let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
        // fetch(url, {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         props.dispatch(login(res.data.name))
        //         setShow(false)//拿到数据之后就将他设置成false
        //        }
        //     )
    }

    return (
        <div>
            {/* {props.username?
            props.username:
            <button onClick={login}
            >登录</button>
            } */}
            {props.username ?
                <div>
                   
                    {props.username}
                    <button onClick={ ()=>{
                        props.dispatch({
                            type:'LOGIN',
                            username:''
                        })
                    }}>退出</button>
                </div>
                : <button onClick={log}
                >登录</button>
            }
            <ActivityIndicator
                toast
                text="登录中..."
                animating={isShow}//登陆状态显示
              />

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        username: state.home.username
    }
}

export default connect(mapStateToProps)(Home)
{/* <div className="toast-example">
<ActivityIndicator
  toast
  text="Loading..."
  animating={this.state.animating}
/> */}