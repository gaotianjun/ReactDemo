import React from 'react'
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'
import Reac from './Reac'
import Doc from './Doc'
import Teach from './Teach'
import Blog from './Blog'
import Community from './Community'
import Login from './Login'
import './App.css'
import router from './router.config'


const App=()=>{
    return <Router>
      <header>
        {/* Home组件 */}
      <nav>
        <NavLink activeClassName="active" exact to='/'>React</NavLink>
        <NavLink activeClassName="active" to='/doc'>文档</NavLink>
        <NavLink activeClassName="active" to='/teach'>教程</NavLink>
        <NavLink activeClassName="active" to='/blog'>博客</NavLink>
        <NavLink activeClassName="active" to='/community'>社区</NavLink>
      </nav>
    </header>  
    <Switch>
      {
        router.map(route=>(
          <Route {...route}/>
          // <Route path={router.path} component={route.component} exact={route.exact}/>
        ))
      }

      {/* {
  			routes.map(({pri,...rest})=>{
  				if(pri){
  					return <PrivateRoute {...rest} />
					}
  				return <Route {...rest} />
  			})
			} */}

      <Route exact path='/' component={Reac}></Route>
      <Route path='/doc/:id' component={Doc}></Route>
      <Route path='/teach' component={Teach}></Route>
      <Route path='/blog' component={Blog}></Route>
      <Route path='/community' component={Community}></Route>
      <Route path='/login' component={Login}></Route>
    </Switch>
  </Router>
}

export default App;
