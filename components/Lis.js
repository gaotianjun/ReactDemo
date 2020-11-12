import React, { createElement } from 'react';

const List=(props)=>{
    return<ul>
      {
      props.data.map ((item)=> <li>{item.title}</li>)
      }
    </ul>
  }
  export default List;