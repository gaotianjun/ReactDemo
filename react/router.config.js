import Reac from './Reac'
import Doc from './Doc'
import Teach from './Teach'
import Blog from './Blog'
import Community from './Community'
import Login from './Login'

const routers = [
  {
    path:'/',
    exact:true,
    component:Reac
  },
  {
    path:'/doc',
    component:Doc
  },
  {
    path:'/teach',
    component:Teach
  },
  {
    path:'/community',
    component:Community
  },
  {
    path:'/blog',
    component:Blog
  },
  {
    path:'/login',
    component:Login
  }
]

export default routers;