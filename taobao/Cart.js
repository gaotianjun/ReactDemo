import React from 'react'
import Mytab from './Mytab';

const Cart = (props) => {
    return (
        <div>
            购物车
            <button onClick={()=>props.history.push('/')}>返回</button>
            <Mytab />
        </div>
    )
}

export default Cart