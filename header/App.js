// import React from 'react'
// import {BrowserRouter as Router,Route,NavLink,Switch,} from 'react-router-dom'
// import 'antd-mobile/dist/antd-mobile.css'
// import {Button} from 'antd-mobile'

// import Reac from './Reac'
// import Doc from './Doc'
// import Teach from './Teach'
// import Blog from './Blog'
// import Community from './Community'
// import Login from './Login'
// import './App.css'

// import { TabBar } from 'antd-mobile';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: 'redTab',
//       hidden: false,
//       fullScreen: false,
//     };
//   }

//   renderContent(pageText) {
//     return (
//       <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
//         <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
//         <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
//           onClick={(e) => {
//             e.preventDefault();
//             this.setState({
//               hidden: !this.state.hidden,
//             });
//           }}
//         >
//           Click to show/hide tab-bar
//         </a>
//         <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
//           onClick={(e) => {
//             e.preventDefault();
//             this.setState({
//               fullScreen: !this.state.fullScreen,
//             });
//           }}
//         >
//           Click to switch fullscreen
//         </a>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
//         <TabBar
//           unselectedTintColor="#949494"
//           tintColor="#33A3F4"
//           barTintColor="white"
//           hidden={this.state.hidden}
//         >
//           <TabBar.Item
//             title="Life"
//             key="Life"
//             icon={<div style={{
//               width: '22px',
//               height: '22px',
//               background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
//             />
//             }
//             selectedIcon={<div style={{
//               width: '22px',
//               height: '22px',
//               background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
//             />
//             }
//             selected={this.state.selectedTab === 'blueTab'}
//             badge={1}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'blueTab',
//               });
//             }}
//             data-seed="logId"
//           >
//             {this.renderContent('Life')}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             selectedIcon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             title="Koubei"
//             key="Koubei"
//             badge={'new'}
//             selected={this.state.selectedTab === 'redTab'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'redTab',
//               });
//             }}
//             data-seed="logId1"
//           >
//             {/*{this.renderContent('Koubei')}*/}
//             <Button onclick={()=>{}} type='primary'>Click</Button>
//           </TabBar.Item>
//           <TabBar.Item
//             icon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             selectedIcon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             title="Friend"
//             key="Friend"
//             dot
//             selected={this.state.selectedTab === 'greenTab'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'greenTab',
//               });
//             }}
//           >
//             {this.renderContent('Friend')}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
//             selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
//             title="My"
//             key="my"
//             selected={this.state.selectedTab === 'yellowTab'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'yellowTab',
//               });
//             }}
//           >
//             {this.renderContent('My')}
//           </TabBar.Item>
//         </TabBar>
//       </div>
//     );
//   }
// }

// import React, { createElement } from 'react';
// import Mytab from './Mytab'
// const App= () => {

//   return <Mytab />

// }

// export default App;






// import React from 'react';
// import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
// import Reac from './Reac';
// import Doc from './Doc';
// import Teach from './Teach';
// import Blog from './Blog';
// import Community from './Community';
// import Login from './Login';
// import './App.css'
// const App= () => {
// 	return <Router>
// 	<header>
// 		{/* Home */}
// 	<nav>
// 		<NavLink activeClassName="active" exact to='/'>React</NavLink>
// 		<NavLink activeClassName="active" to='/doc'>文档</NavLink>
// 		<NavLink activeClassName="active" to='/teach'>教程</NavLink>
// 		<NavLink activeClassName="active" to='/blog'>博客</NavLink>
// 		<NavLink activeClassName="active" to='/community'>社区</NavLink>
// 	</nav>
// 	</header>  
// 	<Switch>
// 	<Route exact path='/' component={Reac}></Route>
// 	<Route path='/doc' component={Doc}></Route>
// 	<Route path='/teach' component={Teach}></Route>
// 	<Route path='/blog' component={Blog}></Route>
// 	<Route path='/community' component={Community}></Route>
// 	<Route path='/login' component={Login}></Route>
// 	</Switch>
// 	</Router>
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect,Link} from "react-router-dom";
import routers from'./Router.config'
import Header from './header'
import './App.css'

function RouteWithSubRoutes(route) {
	return (
		<Route 
			path={route.path}
			render={props => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}

function PrivateRoute({ component: Com, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				localStorage.getItem('userinfo')
					? <Com />
					: (
						<Redirect
							to={{
								pathname: "/login",
								state: location
							}}
						/>
					)
			}
		/>
	);
}

const App = () => {
	return <Router>
	<div>
		<Header />
		<Switch>
		 	{routers.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          	))}
		</Switch>
	</div>
	</Router>
}

export default App;