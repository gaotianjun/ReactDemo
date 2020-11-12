import React, { Component } from 'react';

class List extends Component {
    //分done属性渲染到页面
    renderTodos = (done) => {
        const { todos, delTodo, toggle } = this.props;
        return todos.map((todo, idx) => {
            if (done == todo.done) {
                return <li>
                    <input
                        onClick={() => toggle(idx)}
                        checked={done}
                        type="checkbox"
                    />
                    <span dangerouslySetInnerHTML={{ __html: todo.title }}></span>
                    <button onClick={() => delTodo(idx)}> 删除 </button>
                </li>
            }
        })
    }
    render() {
        let arr1 = this.props.todos.filter(item => !item.done);
        let arr2 = this.props.todos.filter(item => item.done)
        return <div>
            <h2>正在进行 { arr1.length } </h2>
            <ul>
                {this.renderTodos(false)}
            </ul>
            <h2>已经完成 { arr2.length } </h2>
            <ul>
                {this.renderTodos(true)}
            </ul>
        </div>
    }
}
export default List;