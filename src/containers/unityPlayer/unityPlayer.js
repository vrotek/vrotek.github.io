import React, { Component } from 'react';
import Unity,{UnityContext} from 'react-unity-webgl'

class unityPlayer extends Component {

    constructor(props){
        super(props)
        this.unityContext = new UnityContext({
            codeUrl: "./build/new.wasm",
            frameworkUrl: "./build/new.framework.js",
            dataUrl: "./build/new.data",
            loaderUrl: "./build/new.loader.js",
        });
    }

    state = {
        
    }

    render(){  
        return (
                <div>
                    <div><Unity width={"100%"} height={"100%"} unityContext={this.unityContext} /></div>
                </div>
        )
    }
}
export default unityPlayer