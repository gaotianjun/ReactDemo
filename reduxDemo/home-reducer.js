import React from 'react'

const homereducer = (state={username:''},action) => {
   switch(action.type){
    case 'LOGIN':
        //Object.assign(state,{},{username:'123'});//复制一个对象
        return {username:action.username};
    default:
        return state;

   }
}

export default  homereducer
