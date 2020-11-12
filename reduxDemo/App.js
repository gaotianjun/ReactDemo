import { Switch } from 'antd-mobile';
import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter  as Router } from 'react-router-dom';//router的引入注意
import Home from './Home';
import Change from './Input';
import store from './store'
import Todos from './Todos';


//redux react-redux
//webpack
//umi
//router(react-router)怎么实现的
// Provider

//redux--提供可预测的状态管理的容器
//action更新状态的唯一途径，reducer，告诉怎么更新，store链接二者
// let obj={usr:'123'}
// let obj1=Object.assign({},obj,{user:'456'},{a:'222'});
// console.log(obj===obj1);
// console.log(obj,obj1);
// BrowserRouter
const App = () => {
    return <Provider store={store}>
        {/* 向下传值 */}
        {/* <Todos/> */}
        
        <Router> 
            <Change/>
            <Home/>
        </Router> 

    </Provider>
}
// const App = () => {
//     const [todos, setTodos] = useState(store.getState());//函数组件内更新组件使用useState
//     useEffect(() => {
//         store.subscribe(() => {
//             setTodos(store.getState());//更新状态

//         })
//     }, [])//[]只执行一次
//     // 类组件就是放到constructor

//     console.log(todos);
//     return (
//         <div>
//             {
//                 todos.map((item) => <li>{item}</li>)
//             }
//             <button onClick={() => {
//                 store.dispatch(
//                     {
//                         type: 'add_todo',
//                         value: 'hanyumeng'
//                     }
//                 )
//             }}>添加</button>

//         </div>
//     )
// }

export default App
