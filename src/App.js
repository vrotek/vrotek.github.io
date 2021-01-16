import React,{Component} from 'react'
import './App.css';
import Unity,{UnityContext} from 'react-unity-webgl'

import UnityPlayer from './containers/unityPlayer/unityPlayer'

class App extends Component {

  constructor(){
      super();
      this.speed = 30;
      this.state = {
        degrees: 0,
        message: "-",
        showUnity: true,
      };
      this.unityContext = new UnityContext({
        codeUrl: "/build/build.wasm",
        frameworkUrl: "/build/build.framework.js",
        dataUrl: "/build/build.data",
        loaderUrl: "/build/build.loader.js",
      });
}

  render(){
    return (
      <div className="App">
        <h1>Hey its working</h1>
        { this.state.showUnity && <Unity width={"100%"} height={"100%"} unityContext={this.unityContext} />}
      </div>
    );
  }
  
}

export default App;
