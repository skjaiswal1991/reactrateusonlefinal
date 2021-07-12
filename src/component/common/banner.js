import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <section className="banner-section">
                <div className="container">	
                    <div className="row">
                        <div className="col-md-7">
                            <div className="banner-content">
                                <h2 className="alt-font">We Make online review management easy.</h2>
                                <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                <button type="submit" className="btn btn-danger mb-2 find-search">Free 21-Day Trial</button>
                                <button type="submit" className="btn btn-default mb-2 tour">or take the Tour <i className="fa fa-angle-right"></i></button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="banner-content">                            
                                <div className="header-video-box">
                                    <div className="image-box">
                                        <div className="play-icon"><i className="fa fa-play"></i></div>
                                        <a href="https://www.rateusonline.com/how-virtual-reality-can-be-used-to-improve-your-employee-experience-at-work/">
                                            <img className="img-fluid" alt="" src="https://img.youtube.com/vi/Qjxg5jKJoZ0/hqdefault.jpg" /></a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Banner;