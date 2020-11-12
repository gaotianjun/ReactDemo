import React,{useEffect} from 'react'
import {NavLink,Route, Redirect,useHistory,useLocation,useParams,useRouteMatch,withRouter} from 'react-router-dom'
import './doc.css'
import {NavBar,Icon} from 'antd-mobile'

const DocContent = (props)=>{
  return <h1>
    {props.match.params.type}
  </h1>
}
const Doc=(props)=> {
  // const history = useHistory();
  // const location = useLocation();
  // const params = useParams();
  // const routeMatch = useRouteMatch();
  // console.log(history);
  // console.log(location);
  // console.log(params);
  // console.log(routeMatch);

  console.log(props);
  // useEffect(()=>{
  //   if(!localStorage.getItem('userinfo')){
  //     props.history.push({
  //       pathname:'/login',
  //       state:props.location
  //     })
  //   }
  // },[])
  return (
    <div class='doc'>
      {/* <NavBar
        mode="light"
        icon={<Icon type="left"/>}
        onleftClick={()=>console.log('onleftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{marginRight:'16px'}}/>,
          <Icon key="1" type="ellipsis"/>,
        ]}
      >NavBar</NavBar> */}
      
      <div className="content">
        {/* 嵌套路由 */}
        <Route path='/doc/:type' component={DocContent}/>
        <Redirect from='/doc' to='/doc/core' />
      </div>
      <ol>
        <li><NavLink to='/doc/core'>高级指引</NavLink></li>
        <li><NavLink to='/doc/guide'>导航</NavLink></li>
        <li><NavLink to='/doc/api'>API</NavLink></li>
        <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
      </ol>
    </div>
  )
}
// export default Doc;

export default withRouter(Doc);