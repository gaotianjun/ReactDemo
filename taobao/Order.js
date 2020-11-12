import React from 'react'
import Mytab from './Mytab';

const Order = (props) => {
    
    return (
        <div>
            订单
            <button onClick={()=>props.history.push('/')}>返回</button>
            <Mytab />
        </div>

    )
}

export default Order