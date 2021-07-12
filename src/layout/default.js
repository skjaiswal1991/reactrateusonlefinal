import React, { Component } from 'react';
import Footer from './../component/common/footer'
import Header from './../component/common/header'

class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    callback = (d) =>{
        console.log(d);
        console.log(this.props);
    }
    render() { 
        return (
            <React.Fragment>
                <Header/>
                {this.props.children}
                <Footer />
             </React.Fragment> 
         );
    }
}
 
export default Default;
