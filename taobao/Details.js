import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import './Details.css'

let obj = {};
let id = '';

class Details extends Component {
    constructor(props) {
        super(props);
    }
    //根据传参数据的img寻找本商品其他信息
    componentWillMount() {
        console.log(this.props);
        for (let i = 0; i < this.props.data.datalist.length; i++) {
            if (this.props.data.datalist[i].img === this.props.location.state) {
                obj = this.props.data.datalist[i];
                id = obj.id;
            }
        }
    }

    render() {
        return (
            <div class="container">
                {/* 返回 */}
                <button class="btn-back" onClick={() => this.props.history.push('/')} >
                    <i className="iconfont icon-jiantouzuo"></i>
                </button>
                {/* 商品详情 */}
                <div class='box'>
                    <img class="details-img" src={`${this.props.location.state}`} />
                    <div class="price-box1">
                        <span class="price-h1">￥</span>
                        <span class="price1">{obj.price}</span>
                        <span class="payed1">商品id:{obj.id}</span>
                    </div>
                    <div class="title1">
                        <span class="title-p1">{obj.title}</span>
                    </div>
                </div>
                {/* 底部栏 */}
                <div class='bar'>
                    {/* 店铺 */}
                    <div class="shop bar1">
                        <p><i className="iconfont icon-icon_A"></i></p>
                        <p class="bar-text">店铺</p>
                    </div>
                    {/* 客服 */}
                    <div class="wang bar1">
                        <p><i className="iconfont icon-aliwangwang-aliwangwang"></i></p>
                        <p class="bar-text">客服</p>
                    </div>
                    {/* 收藏 */}
                    <div class="fav bar1" onClick={(evt) => {
                        {/*判断是否登录 */}
                        if (this.props.data.userinfo === '') {
                            this.props.history.push('/my')
                            return
                        } else {
                            this.props.dispatch({
                                shoucang: id,
                                type: 'add_todo'
                            })
                            evt.currentTarget.style.color = 'red';
                        }
                    }}>
                        <p><i className="iconfont icon-shoucang"></i></p>
                        <p class="bar-text">收藏</p>
                    </div>
                    {/* 加入购物车|购买 */}
                    <div class="buy">
                        <button class="buy1 btn-lg btn-left">加入购物车</button>
                        <button class="buy1 btn-lg btn-right">立即购买</button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        data: state
    }

}
export default connect(mapStateToprops)(Details)
