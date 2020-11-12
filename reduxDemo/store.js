import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
// import thunk from 'redux-thunk';
import home from './home-reducer';//默认导出可以其别的名字
import todo from './todos-reducer'
// compose 将很多函数拼接在一起
let rootReducer=combineReducers(
    {
        todo,home
    });//整合不在一起的几个


    function logger({ getState }) {
        return (next) => (action) => {
          console.log('will dispatch', action)
      
          // 调用 middleware 链中下一个 middleware 的 dispatch。
          let returnValue = next(action)
      
          console.log('state after dispatch', getState())
      
          // 一般会是 action 本身，除非
          // 后面的 middleware 修改了它。
          return returnValue
        }
      }
      const thunk=({ dispatch, getState }) => (next) => (action) => {
       console.log('thunk')
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }
    
        return next(action);
      };

const store=createStore(
    rootReducer,
    compose(applyMiddleware(logger,thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );//传入对应的reducer

export default store;