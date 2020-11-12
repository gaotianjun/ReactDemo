import React, { Component } from 'react'
import { connect } from 'react-redux'
import Mytab from './Mytab';
import './collect.css'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const Collect = (props) => {

  console.log(props.mydata.userinfo);

  return (
    //判断是否登录
    props.mydata.userinfo ?
      (<div class="con-shoucang">
        {
          props.mydata.shoucang.map((item, idx) =>
            <div className='goods-shoucang' >

              <img src={props.mydata.datalist[item - 100].img} className='img-shoucang' />
              <p className='p-shoucang'>{props.mydata.datalist[item - 100].title}</p>
              <p className='p-shoucang'>￥:{props.mydata.datalist[item - 100].price}</p>

              <button className='btn-shoucang'
                onClick={() => {
                  props.dispatch({
                    type: 'del_todo',
                    index: idx
                  })
                }
                }
              >删除</button>

            </div>

          )
        }
        <Mytab />
      </div>)
      : (
        <Redirect
          to={{
            pathname: "/my"
          }}
        />
      )
  )

}


const mapStateToprops = (state) => {

  return {
    mydata: state,
  }
}
export default connect(mapStateToprops)(Collect)