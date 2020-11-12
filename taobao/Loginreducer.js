
const Loginreducer = (state = '', action) => {
    switch (action.type) {
        case 'LOGIN':
            //拷贝对象
            //Object.assign(state, {}, { userinfo: 'tt' })
            return action.userinfo 
        default:
            return state
    }
}
export default Loginreducer;
