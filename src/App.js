// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Title} from './components/title/Title'
import FormInput from './components/forminput/Forminput' 


 export const App =() => (
  <div>
    <FormInput labelText={'телефон'} inputType={'phone'}/>
    <FormInput labelText={'имя'} inputType={'text'}/>
    <FormInput labelText={'пароль'} inputType={'password'}/>
    <Title title={'Главная'}/>
    <Title title={'Главная,но не совсем'}/>
  </div>
)
// const Items = () => {
//   return (
//     <div>
//     <div>Item</div>
//     <div>Item</div>
//     <div>Item</div>
//     <div>Item</div>
//   </div>
//   )
// }
// function Title() {
//   return <h1>Привет мир!</h1>
// } 
// class FormInput extends React.Component{
//   render(){
//     return <input type='number' />
//   }
// }

//  export const App = () => {
//   return(
//     <div>
//       <FormInput/>
//       <Title/>
//       <Items/>
//       <Items/>
//       <Items/>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
