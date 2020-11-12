import Mytab from './Mytab';
import Home from './Home';
import Cart from './Cart';
import My from './My';
import Order from './Order';
import SearchBarTop from './SearchBarTop';
import Collect from './collect'
import Details from './Details'

const routers=[
      {
        path:'/',
        exact:true,
        component:Home
      },
      {
        path:'/my',
        component:My
      },
      {
        path:'/collect',
        component:Collect
      },
      {
        path:'/order',
        component:Order
      },
      {
        path:'/search',
        component:SearchBarTop 
      },
      {
        path:'/details',
        component:Details 
      }
    ]
    
    export default routers;