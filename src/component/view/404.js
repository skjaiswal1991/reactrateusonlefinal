import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section class="section-gap"> 
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="error-content text-center">
                                <h1>404</h1>
                                <h4>Page not found</h4>
                                <Link class="btn sabai-btn btn-sm" to='/' type="button">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Error;