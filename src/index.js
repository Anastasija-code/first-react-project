import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

// const foo = () => 'name'
// const upperStr = (str) => str.toUpperCase()
// console.log(upperStr('Привет'))
// ReactDOM.render(
//   <h1>Hello React, 2+2 = 4 {14*4} {foo()} {upperStr('Привет, меня зовут Вова')} </h1>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <div>
//     <div>Item</div>
//     <div>Item</div>
//     <div>Item</div>
//     <div>Item</div>
//   </div>,
//   document.getElementById('root')
// )
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)


