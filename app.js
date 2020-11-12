import React from 'react';
import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
const Home = ()=>{
	return <div>Home</div>
}
const About = (props)=>{
	console.log(props.location.state)
	return <div>About</div>
}
const Content = (props)=>{
	console.log(props)
	return <div>{props.match.params.page}</div>
}
const App = ()=>{
	return <Router>
		<ul>
			<li><NavLink exact activeStyle={{color:'red'}} to='/'>home</NavLink></li>
			<li><NavLink activeStyle={{color:'red'}} to={{
				pathname:'/about',
				state:{id:100}
			}}>About</NavLink></li>
			<li><NavLink activeStyle={{color:'red'}} to='/news'>News</NavLink></li>
			<li><NavLink activeStyle={{color:'red'}} to='/content/1'>content01</NavLink></li>
			<li><NavLink activeStyle={{color:'red'}} to='/content/2'>content02</NavLink></li>
		</ul>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About}>
			</Route>
			<Route path='/news' render={()=><div>News</div>}/>
			<Route path='/content/:page' component={Content}/>
			<Route path='/:id' render={()=><Redirect to='/news'></Redirect>}></Route>
		</Switch>
	</Router>
}

export default App;




// const init = [
//   {done:false,title:'hello'},
//   {done:false,title:'world'},
//   {done:false,title:'haha'},
// ];

// function App() {
//   const [todos, setTodos] = useState([]);
//   useEffect(()=>{
//     let localTodos = localStorage.getItem('todos');
//     if(localTodos){
//       setTodos( JSON.parse( localTodos ) );
//     }
//   },[])
//   useEffect(()=>{
//     localStorage.setItem('todos',JSON.stringify(todos));
//   },[todos])
//   let inp = null;
//   const add = ()=>{
//     setTodos([...todos,{done:false,title:inp.value}])
//   }
//   const change = (idx)=>{
//     setTodos(todos.map((todo,id)=>{
//       idx==id&&(todo.done=!todo.done)
//       return todo;
//     }))
//   }
//   const del = (idx)=>{
//     setTodos(todos.filter((todo,id)=>idx!=id))
//   }
//   const renderLi = (done)=>{
//     return todos.map((todo,idx)=>(
//       todo.done==done&&<li key={idx}>
//           <input checked={todo.done} type="checkbox"  onChange={()=>change(idx)}/>
//           {todo.title}
//           <button onClick={()=>del(idx)}>删除</button>
//       </li>
//     ))
//   }
  
//   return (
//     <div className="App">
//       <h1>ToDoList</h1>
//       <input ref={input=>inp=input} type="text"/><button onClick={add}>添加</button>
//       <h2>未完成</h2>
//       <ul>
//         {renderLi(false)}
//       </ul>
//       <h2>已完成</h2>
//       <ul>
//         {renderLi(true)}
//       </ul>
//     </div>
//   );
// }