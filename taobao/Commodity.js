import React, { useEffect} from 'react'
import './Commodity.css'
import { connect } from 'react-redux'
import { Data } from './datalistCreators'

const Commodity = (props) => {
    useEffect(() => {
        props.dispatch(Data());
    }, [])

    let arr = props.datalist;

    if (arr === []) {
        return (
            <div></div>
        )
    } else {
        return (
            <div class='container'>
                {/*商品概览信息*/}
                {arr.map((i) => (
                    <div onClick={() => { props.history.push('/details', `${i.img}`) }}>
                        <div class="item">
                            <a class='item-1'>
                                <img class="item-img" src={`${i.img}`} />
                            </a>
                            <a class="item-2">
                                <div class="title">
                                    <span class="title-p">{`${i.title}`}</span>
                                </div>
                                <div class="price-box">
                                    <span class="price-h">￥</span>
                                    <span class="price">{`${i.price}`}</span>
                                    <span class="payed">商品id:{`${i.id}`}</span>
                                </div>
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        )

    }

}

const mapStateToprops = (state) => {
    console.log(state);
    return {
        datalist: state.datalist
    }

}

export default connect(mapStateToprops)(Commodity);