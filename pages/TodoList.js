import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import List from '../components/List';
import Input from '../components/Input';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            inpValue: '',
            todos:[]
        }
    }
    handleChange = (e)=>{
        this.setState({inpValue:e.target.value})
    }
    componentDidMount(){
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos: JSON.parse(todos)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
    }
    //添加
    addTodo = ()=>{
        if(this.state.inpValue==''){
            alert("不能为空");
            return;
        }
        else{
            this.setState({
            todos: [
                {
                    title: this.state.inpValue,
                    done: false
                },
                ...this.state.todos
            ]
        })
        this.setState({inpValue:''});
        }
    }
    //删除
    delTodo = (idx)=>{
        this.setState({
            todos: this.state.todos.filter((item,index)=>index!=idx)
        });
    }
    toggle = (index)=>{
        let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        newTodos[index].done = !newTodos[index].done;
        this.setState({
            todos: newTodos
        })
    }
    renderTodos = (done)=>{
        return this.state.todos.map((todo,idx)=>{
            if(done==todo.done){
                return <li>
                    <input 
                        onClick={()=>this.toggle(idx)}
                        checked={done} 
                        type="checkbox"
                    />
                    <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
                    <button 
                        onClick={()=>this.delTodo(idx)}
                    >
                        删除
                    </button>
                </li>
            }
        })
    }
    render() {       
        const {todos,inpValue} = this.state;
        return (
            <div className="box">
                <Input 
                    inpValue={inpValue} 
                    handleChange={this.handleChange}/>
                <button onClick={this.addTodo}>添加</button>
                <List renderTodos={this.renderTodos} delTodo={this.delTodo} toggle={this.toggle} todos={todos}/>
            </div>
        );
    }
}

export default TodoList;
