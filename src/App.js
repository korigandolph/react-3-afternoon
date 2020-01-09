import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Buttons from './Components/Buttons';

class App extends Component {
  constructor(){
    super()
   
    
  }
  


  render(){
    return (
      <div >
        <Header/>
        <Body/>
        <Buttons/>
      </div>
    );

  }
  
}

export default App;