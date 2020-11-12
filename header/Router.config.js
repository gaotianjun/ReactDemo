import Home from './Home';
import Doc from './Doc';
import Tuto from './Tuto';
import Blog from './Blog';
import Community from './Community';
import Login from './Login';

const routers=[
      {
        path:'/',
        exact:true,
        component:Home
      },
      {
        path:'/doc',
        component:Doc
      },
      {
        path:'/tuto',
        component:Tuto
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