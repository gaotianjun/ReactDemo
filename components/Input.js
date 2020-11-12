import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            inpValue: ''
        }
    }
    //----将input里内容添加到inpValue----
    handleChange = (e) => {
        //e.target不冒泡就是指向事件触发的dom
        this.setState({ inpValue: e.target.value })
    }
    render() {
        return <div>
            <label htmlFor="inp">todolist</label>
            <input
                id='inp'
                value={this.state.inpValue}
                type="text"
                onChange={this.handleChange}
            />
            <button
                onClick={
                    () => {
                        this.props.addTodo(this.state.inpValue)
                        this.setState({ inpValue: '' })
                    }
                }>添加</button>
        </div>
    }
}
export default Input;