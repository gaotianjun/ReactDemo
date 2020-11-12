
let todo=[];

function shoucang(state=todo,action){
    if(action.type=='del_todo'){
        //不可变对象
        let arr=[...state];
        arr.splice(action.index,1);
        return arr;
    }
    if(action.type==='add_todo'){
        console.log(action);
        //不可变对象
        return [...state,action.shoucang]
        //return action.shoucang
    }else{
        return state
    }
}

export default shoucang;