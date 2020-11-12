import React from 'react'
import Context from '../pages/context'
import PropTypes from 'prop-types'
import Demo2 from './demo2'
//rcc
//rafc
//rafce
const demo1=(props)=>{
        return (
            <div style={{width:100,height:110,backgroundColor:"red"}}>
                <h2>Context</h2>
                <ul>
                   <Context.Consumer>
                       {
                            data=>data.map(
                                item=><li key={item}>{item}</li>
                            )
                       }
                   </Context.Consumer>
                </ul>
                <Demo2/>
            </div>
            
        )
}
demo1.propTypes={
    name:PropTypes.string.isRequired
}
demo1.propTypes={
    name:'Tom'
}

export default demo1;