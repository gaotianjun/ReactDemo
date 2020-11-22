import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

//import Home from './pages/Home';
// import Control from './components/Control'
// import Demo1 from './components/demo1'
// //import App from './pages/app';
// import Hoc,{Detail}from './pages/Hoc'
// import Hook from './pages/Hook';

//import App from './reduxDemo/App';
//import App from './pages/TodoList'

// ReactDOM.render(
//   <Control />,
//   document.getElementById('root')
// );



//----React----
// import React, { createElement } from 'react';
// import ReactDOM, { render } from 'react-dom';
//import App from './header/App';
// // import App from './react/App'
//import App from './reduxDemo/App'
 
//要一起引用
import App from './taobao/App';
import 'antd-mobile/dist/antd-mobile.css';


 ReactDOM.render(
   <App />,
   document.getElementById('root')
 );


//----TodoList----
// import React, { createElement } from 'react';
// import ReactDOM, { render } from 'react-dom';
// import TodoList from './pages/TodoList';

// ReactDOM.render(
//   <TodoList />,
//   document.getElementById('root')
// );


//-----------------------------------------------------------------------


//--Hook：显示当前时间--
//--Control：todolist--

// ReactDOM.render(
//   //<Home data="abc" />,
//   <Control />,
//   //<Demo1 name='ww'/>,
//   //<div><Hoc /><Detail /></div>,
//   //<Hook />,
//   //<Home />,
//   document.getElementById('root')
// );

//---------------------------------------------------
//import  $ from 'jquery' 

//console.log($);

// const List=(props)=>{
//   return<ul>
//     {
//     props.data.map ((item)=> <li>{item.title}</li>) 
    
//     }
//   </ul>
// }

// const Buttons=()=>{
//   const btns=[1,2,3,4,5];
//   return<div>
//     {
//       btns.map((item)=><button>{item}</button>)
//     }
//   </div>
// }

// class Home extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       data:[]
//     }
//     //this.handleClick=this.handleClick.bind(this)
//   }
//   componentDidMount(){
//     fetch('https://cnodejs.org/api/v1/topics')
//     .then(res=>res.json())
//     .then( ({data}) => {
//       this.setState({data})
//     })
//   }
//   getData=(page)=>{
//     fetch('https://cnodejs.org/api/v1/topics?page='+page) //从上面拿到数据是promise类型的
//         .then(res=> res.json()).then(({data})=>{//拿到的数据是个对象格式
//           this.setState({data});//执行之后页面就会重新渲染
//           console.log(page);
//          })
// 	}
//   render(){
//     const { data } = this.state;
//     const btns=[1,2,3,4,5];
//     return <div>
//       {
//         btns.map(
//           (item)=>(
//             <button 
//               key={item}
//               onClick={()=>this.getData(item)}
//             >
//               {item}
//             </button>
//         ))
//       }
//       <List data={data}/>
//     </div>
//     // return <div>
//     //   <Buttons />
//     //   <List data={data}/>
//     // </div>
//   }
// }
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );

// class Home extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data:[]
//     }
//     fetch('https://cnodejs.org/api/v1/topics')
//     .then(res=>res.json())
//     .then(data=>{
//       this.setState({data:data.data})
//     })
//   }
//   render(){
//       const {data}=this.state;
//       return <List data={data}/>
//     // return <ul>
//     //   {
//     //     this.state.data.map(
//     //      (item)=><li>{item.title}</li>
//     //     )
//     //   }
//     // </ul>
//   }
// }
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );


//---------------------------------------------------

// class Home extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data:[]
//     }
//     setTimeout(()=>{
//       this.setState({data:[5,6,7,8,9]})
//     },500)
//   }
//   render(){
//     return <ul>
//       {
//         this.state.data.map(
//           (item)=><li>{item}</li>
//         )
//       }
//     </ul>
//   }
// }

// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );



{/* ReactDOM.render(
  <App title="任意值" id='app'/>,
  document.getElementById('root')
); */}



//----------------------------------------------------------------------------


//----节点----
//let ele=<h1>hello world</h1>
//let ele=<h1  id='title' className="tit"><div>hello</div>react</h1>

// const ele = React.createElement('h1',{className:'box'},'hello',React.createElement('h2',{},'world'));
// console.log(ele.props.children);
// ReactDOM.render(ele, document.getElementById('root')); 

// let ReactDom={
//   render(eleObj,container){
//     const{type,props}=eleObj;
//     //创建第一层节点对象
//     let ele=document.createElement(type);
//     //子节点
//     for(const prop in props){
//       if(prop=='children')
//       {
//         props.children.forEach(child=> {
//           if(typeof child=='string'){
//             const txtNode=document.createTextNode(child);
//             ele.appendChild(txtNode);
//           }
//           else{
//             React.render(child,ele);
//           }
//         });
//       }
//       else{
//         ele[prop]=props[prop];
//       }
//     }
//     container.appendChild(ele);
//   }
// }

//----渲染不变----
// function tick() { 
// 	const ele = (
// 		<div>
// 			<p>hello world</p>
// 			{new Date().toLocaleTimeString()}
// 		</div> 
// 	); 	
// 	ReactDOM.render(ele, document.getElementById('root')); 
// } 
// setInterval(tick, 1000);

//----组件----
//--函数定义组件
//--props只读；组件名称大写
// function App(props){
//   const{title}=props;
//   return<div>
//     <div>{title}</div>
//     <div>world</div>
//   </div>
// }
//--类定义组件1
//--/pages/app --/component/demo1 --/component/demo2
// class Demo extends React.PureComponent{
//   render(){
//     return<div>
//       <App title='任意值' id='app'/>
//     </div>
//   } 
// }
// ReactDOM.render(
//   <Demo/>,
//   document.getElementById('root')
// );
//--类定义组件2
// class Demo extends React.PureComponent{
//   constructor(){
//     super();
//     this.state={
//       name:'tom'
//     }
//   }
//   render(){
//     return<div>
//       name:{this.state.name}
//     </div>
//   } 
// }
// ReactDOM.render(
//   <Demo/>,
//   document.getElementById('root')
// );

// ----生命周期----
// 初始化、挂载、更新、卸载、错误

//----事件绑定----
// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			content:'hello'
// 		}
// 		// this.handleClick = this.handleClick.bind(this);//加上绑定，下面的函数中的this才能指向该组件
//   }
  
// 	// handleClick(){
// 	// 	console.log(this);//this是undefined
// 	// 	this.setState({content:'world'});//报错
// 	// }

// 	// 箭头函数形式 this 指向该组件
// 	handleClick = ()=>{
// 		console.log(this);
// 		this.setState({content:'world'})
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<p>{this.state.content}</p>
// 				<button onClick={this.handleClick}>Click</button>
// 			</div>
// 		)
// 	}
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// ----propTypes----
// class Hello extends Component{
//   render(){
//       return <h1>hello {this.props.name}</h1>
//   }
// }
// Hello.propTypes = {
//   name:PropTypes.string.isRequired
// }
// Hello.defaultProps = {
//   name:'world'
// }
// ReactDOM.render(
//   <Hello name='Tom'/>,
//   document.getElementById('root')
// );