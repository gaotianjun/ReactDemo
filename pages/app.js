import React from 'react'
import Context from './context'
import Demo1 from '../components/demo1'


const App = () => {
    let data=['hello','world']
    return (
        //数据共享 provider、consumer value：众享数据
        <Context.Provider value={data}>
            <Demo1/>
        </Context.Provider>
    )
}
export default App;
