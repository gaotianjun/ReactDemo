import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import datalist from './datalistreducers'
import shoucang from './todoreducers'
import userinfo from './Loginreducer'

let rootReducer = combineReducers({
    datalist, shoucang,userinfo
})


const thunk = ({ dispatch, getState }) => (next) => (action) => {
    console.log('thunk');
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};


const store = createStore(
    rootReducer,

    compose(
        applyMiddleware( thunk),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
