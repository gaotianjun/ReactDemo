import React from 'react'
import { connect } from 'react-redux' //函数，哪一个想要引入那个store引入即可

// connect
const Todos = (props) => {
    console.log(props);
    return (
        <div>
           {
                 props.todos.map((item,idx) => <li key={idx} >{item}</li>)
           }
           <button onClick={() => {
                props.dispatch(

                    {
                        type: 'ADD_TODO',
                        value: 'gaoti'
                    }
                )
            }}>添加</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        todos:state//就是状态容器中的参数
    }
};//返回需要传递的参数

export default connect(mapStateToProps)(Todos)//高阶函数 ，connect的返回值是一个组件，再将后面的值传给这个函数
// 将state的值注入到props中
