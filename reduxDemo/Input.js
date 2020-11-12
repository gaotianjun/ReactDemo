import React from 'react'
import { connect } from 'react-redux'

const change = (props) => {
    console.log(props)
    return (
        <div>
            {
                props.todos.map((item, idx) =>
                    <li key={idx}>
                        {item}
                        <button
                            style={{ backgroundColor: 'blueviolet', marginLeft: '20px' }}
                            onClick={() => {
                                props.dispatch(
                                    {
                                        type: 'DEL_TODO',
                                        index: idx
                                    }
                                )
                            }}
                        >
                            删除
                    </button>
                    </li>)
            }

            <input type="text" onKeyDown={(e) => {
                if (e.keyCode == 13) {//回车键的keycode
                    props.dispatch(
                        {
                            type: 'ADD_TODO',
                            value: e.target.value
                        },
                        e.target.value = ''
                    )
                }
            }} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todos: state.todo//就是状态容器中的参数,当整合的时候就变成了里面的一个属性，要和整合的前面的值一样
    }
};

export default connect(mapStateToProps)(change)
