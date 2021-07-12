import React, { Component } from 'react';
import Topbar from './topbar';
import Navbar from './navbar';
import PreLoader from './preloader'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    callback = (d) =>{
        //this.props.history.push(d);
        //this.props.history.push(`/post/`)
    }
    render() { 
        return ( 

                    <React.Fragment>                       
                        <Topbar/>
                        <Navbar callback = {this.callback} />
                    </React.Fragment>
                    
               	
         );
    }

}
 
export default Header;