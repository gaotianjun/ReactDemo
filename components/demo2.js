import React from 'react'
import Context from '../pages/context'
import PropTypes from 'prop-types'

const demo2=()=>{
        return (
            <div style={{width:100,height:110,backgroundColor:"pink"}}>
                <h2>Context2</h2>
                <ul>
                   <Context.Consumer>
                       {
                            data=>data.map(
                                item=><li key={item}>{item}</li>
                            )
                       }
                   </Context.Consumer>
                </ul>
            </div>
            
        )
}
demo2.propTypes={
    name:PropTypes.string.isRequired
}
demo2.propTypes={
    name:'Tom'
}

export default demo2;