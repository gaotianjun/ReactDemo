
import React, { Component } from 'react';
import Input from './Input';
import List from './List';

// 组件名首字母一定要大写
class Control extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            inpValue:''
        }
    }
    //----将input里内容添加到inpValue----
    handleChange = (e) => {
        //e.target不冒泡就是指向事件触发的dom
        this.setState({ inpValue: e.target.value })
    }
    //----componentDidMount，组件渲染之后调用
    //----本地localStorage里的todos
    componentDidMount() {
        //获得焦点
        //this.input.focus();
        let todos = localStorage.getItem('todos');
        if (todos) {
            this.setState({
                todos: JSON.parse(todos)
            })
        }
    }
    //更新
    //----
    componentDidUpdate(preProps, preState) {
        if (preState.todos !== this.state.todos) {
            localStorage.setItem(
                'todos',
                JSON.stringify(this.state.todos)
            )
        }

    }
    //----按钮，添加到todos
    addTodo = (inpValue) => {
        if (inpValue == '') {
            alert("不能为空");
            return;
        }
        else {
            this.setState({
                todos: [
                    {
                        title: inpValue,
                        done: false
                    },
                    ...this.state.todos
                ]
            })
        }
    }
    //删除
    delTodo = (idx) => {
        // let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        // newTodos.splice(idx,1);
        // this.setState({todos:newTodos});
        this.setState({
            todos: this.state.todos.filter((index) => index != idx)
        });
        // setState 是异步执行的，注意callback的用法
        // this.setState({
        //     todos: this.state.todos.filter((item,index)=>index!=idx)
        // },()=>{
        //     localStorage.setItem(
        //         'todos',
        //         JSON.stringify(this.state.todos)
        //     )
        // });
    }
    //改变属性 done:true/false
    toggle = (index) => {
        let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        newTodos[index].done = !newTodos[index].done;
        this.setState({
            todos: newTodos
        })
    }

    render() {
        //----相当const xxx = this.state.xxx
        const { todos, inpValue } = this.state;
        // let arr1 = todos.filter( item => !item.done)
        // console.log(arr1);
        return (
            <div className="box">
                <Input addTodo={this.addTodo} />
                <List
                    todos={this.state.todos}
                    toggle={this.toggle}
                    delTodo={this.delTodo}
                />
                {/* ----给label添加htmlFor属性后，点击label时，Input框自动聚焦。
                <label htmlFor="inp">todolist</label>
                <input 
                    ref={inp=>this.input = inp}
                    value={inpValue} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <button onClick={this.addTodo}>添加</button>
                <h2>正在进行</h2>
                <ul>
                    {this.renderTodos(false)}
                </ul>
                <h2>已经完成</h2>
                <ul>
                    {this.renderTodos(true)}
                </ul> */}
            </div>
        );
    }
}

export default Control;
