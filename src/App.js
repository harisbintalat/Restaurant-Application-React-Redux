import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Button from './components/button';

class App extends Component {
    render() {
      const todos = [
        {id:1,title:'Buy chocolate'},
        {id:2,title:'Buy ice-cream'}
      ];
  return (
    <BrowserRouter>
      <div>
          <Main />
          <div>
            {
              todos.map((todo)=>{
                return(<Button />)
              })
            }
          </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
