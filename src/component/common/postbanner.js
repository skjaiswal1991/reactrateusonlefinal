import React, { Component } from 'react';
import {withRoute,Link} from 'react-router-dom'
import { config } from './../../config/config'
 
class PostBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    
    render() { 
        console.log(this.props);
        return ( 
                    <div className="container">
                        <div className="row">
                            <div className="col col-12">
                                <div className="blog-banner  mb-3">
                                    <div className="blog-banner-bg">
                                        <div className="artical-blog-img">
                                            <div className="img-overlay"></div>
                                            <img alt="feater image" src={this.props.data.featurePostImage} className="img-fluid" />
                                        </div>
                                        <div className="blog-content">
                                            <h2 className="text-white">{this.props.data.featurePostTitle}</h2>
                                            <p></p>
                                            <Link to={`/post/${this.props.data.featurePostSlug}`}>
                                                <button type="button" className="btn btn-success green-btn mt-3">Featured Post</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

         );
    }
}
 
export default PostBanner;