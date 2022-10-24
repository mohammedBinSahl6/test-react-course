import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import Event from'./components/Events';
import Counter from './components/Counter';
class App extends React.Component{
    render(){
        return (
           <div>
                 <Nav  />
                 <Event />
                <Counter />

           </div>
            
        )
    }
}
export default App;
