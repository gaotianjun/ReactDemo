//redeucer-纯函数，没有副作用，有相同的输入就有相同的输出

let todo = [1, 2, 3];
function TodoList(state = todo, action) {
    console.log(action);
    if (action.type == 'ADD_TODO') {
        return [...state, action.value];//当匹配成功的时候更新数组，不可变对象，引用数据类型，不是一个地址
    }
    if (action.type == 'DEL_TODO') {
        let newState=JSON.parse(JSON.stringify(state));//当要做不影响新的数组的时候，可以进行深拷贝，先变成json对象后解析成JavaScript对象
        newState.splice(action.index,1);//删除下表对应项开始的一项
        return newState;
    }
    return state;//返回原数组
}


export default TodoList

