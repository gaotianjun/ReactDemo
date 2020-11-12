import React from 'react';
import { Button, TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Mytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '/',
        };
    }
    render() {
        const { pathname } = this.props.location;
        return (
            <div style={{
                position: 'fixed',
                width: '100%',
                bottom: 0
            }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="rgb(255,133,42)"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <i className='iconfont icon-shouye'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-home1'></i>
                        }
                        selected={pathname === '/'}
                        onPress={() => {
                            this.props.history.push('/');
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-cart'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-cart2'></i>
                        }
                        title="收藏"
                        key="collect"
                        selected={pathname === '/collect'}
                        onPress={() => {
                            this.props.history.push('/collect')
                        }}
                        data-seed="logId1"
                    ></TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-dingdan'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-dingdan1'></i>
                        }
                        title="订单列表"
                        key="order"
                        selected={pathname === '/order'}
                        onPress={() => {
                            this.props.history.push('/order')
                        }}
                        data-seed="logId2"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-wode2'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-wodedangxuan'></i>
                        }
                        title="我的淘宝"
                        key="my"
                        selected={pathname === '/my'}
                        onPress={() => {
                            this.props.history.push('/my')
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default withRouter(Mytab);