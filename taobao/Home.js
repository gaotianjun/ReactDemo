import { BrowserRouter as Router, Route, NavLink, Switch ,withRouter} from 'react-router-dom'
import React from 'react'
import Mytab from './Mytab';
import Header from './Header'
import CarouselExample from './CarouselExample'
import Commodity from './Commodity'


const Home = (props) => {
    return (
        <div>
            {/*搜索*/}
            <NavLink activeClassName="active" exact to='/search'>
                <Header /> 
            </NavLink>
            {/*轮播图*/}
            <CarouselExample />
            {/*商品信息*/}
            <Commodity history={props.history}/>            
            {/*底部tabx切换*/}
            <Mytab />
        </div>
    )
}

export default withRouter(Home)

// iconfont.cn官网搜选图标，加入购物车
// 点击页面右上角购物车，将图标添加进项目（没有项目就新建）
// 点击“下载到本地”
// 解压压缩包，全部复制到项目public文件夹下，
// 在index.html中通过link引入iconfont.css
// 使用时，<i className='iconfont icon-具体名字'></i>

{/* <img 
                style={{width:'100%'}} 
                src={require('../assets/banner.jpg')} 
                alt=""
        /> */}
{/* <img src={img} alt=""/>
    <img src="https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg" alt=""/> */}
{/* <i style={{fontSize:100,color:'red'}} className='iconfont icon-dingdan'></i> */ }
