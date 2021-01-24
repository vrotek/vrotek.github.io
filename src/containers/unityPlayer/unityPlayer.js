import React, { Component } from 'react';
import Unity,{UnityContext} from 'react-unity-webgl'

import classes from './unityPlayer.module.css'

class unityPlayer extends Component {

    constructor(){
        super();
        this.speed = 30;
        this.state = {
          degrees: 0,
          message: "-",
          showUnity: true,
        };
        this.unityContext = new UnityContext({
          codeUrl: "/build/builds.wasm",
          frameworkUrl: "/build/builds.framework.js",
          dataUrl: "/build/builds.data",
          loaderUrl: "/build/builds.loader.js",
        });
  }

    state = {
        
    }

    render(){  
        return (
                <div className={classes.UnityPlayer}>
                    { this.state.showUnity && <Unity width={"100%"} height={"100%"} unityContext={this.unityContext} />}
                </div>
        )
    }
}
export default unityPlayer