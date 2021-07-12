import React, { Component } from 'react';
// import Loader from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './preloader-style.css'
class PreLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 

            <div id="plcover" style={{background: 'rgb(255, 255, 255)',display: 'none'}}>
                <div id="plcontent">

                    <div class="plcircle2" style={{borderTopColor: '#ec3323'}}></div>
                </div>
            </div>
         );
    }
}
 
export default PreLoader;