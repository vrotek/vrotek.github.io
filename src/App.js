import React,{Component} from 'react'
import './App.css';
import NavBar from './components/navigation/navBar/NavBar'
import Routes from './navigation/Routes'



class App extends Component {

  constructor(){
      super()
  }

  state = {
      navItems: [
        {link: "/games",label: "Our Work"},
        {link: "/about",label: "About Us"},
        
      ]
  }

  render(){
    return (
      <div className="App">
        <NavBar items={this.state.navItems}></NavBar>
        <Routes></Routes>
      </div>
    );
  }
  
}

export default App;
