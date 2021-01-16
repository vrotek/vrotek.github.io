import React,{Component} from 'react'
import './App.css';

import UnityPlayer from './containers/unityPlayer/unityPlayer'

class App extends Component {

  constructor(){
      
  }

  render(){
    return (
      <div className="App">
        <h1>Hey its working</h1>
          <UnityPlayer></UnityPlayer>
      </div>
    );
  }
  
}

export default App;
