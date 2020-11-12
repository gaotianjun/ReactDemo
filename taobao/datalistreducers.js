
let todo=[]

function datalist(state=todo,action){
    if(action.type==='Add_list'){
        //console.log(action);
        //不可变对象
        //return[...state,action.datalist];
        return action.datalist
    }else{
        return state
    }
}

export default datalist;