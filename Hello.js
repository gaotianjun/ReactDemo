import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    //handleClick = ( ) => { }
     handleClick(){

     }
    render( ) {
    return (
    <button onClick={()=>this.handleClick }>
    Click
    </button>
    )
    }
    }

    export default Hello