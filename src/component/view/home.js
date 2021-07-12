import React, { Component } from 'react';
import Banner from './../common/banner'
import Tranding from './../common/trandingnews';
import Slider from './../../module/slider'
import PreLoader from './../common/preloader'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader:true
        }
    }

    postview =(e) =>{
        console.log(e);
        this.props.history.push('/post/'+e)
    }

    componentWillMount(){

    }

    render() { 
        return ( 
                <React.Fragment>
                    <PreLoader active={this.state.loader} />
                    <Banner />
                    <Tranding />
                        <section className="Business-Advertising-section">
                            <div className="container">	
                            <div className="row">
                            <div className="title"><h3 className="alt-font text-center">Our Business Advertising <span>and Marketing Services</span></h3></div>

                            <div className="col-md-3 mt-4">
                                <div className="Business-Advertising-content">
                                    <div className="icon">
                                    <span className=""><i className="fa fa-check-square-o "></i></span>
                                    </div>
                                    <div className="title alt-font"><h5>Verified Reviews</h5></div>
                                    <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry.</p></div>
                                    <button type="button" className="review-btn alt-font">i want more review <span><i className="fa fa-angle-double-right"></i></span></button>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
                            <div className="Business-Advertising-content">
                                <div className="icon">
                                    <span className=""><i className="fa fa-map-marker"></i></span>
                                </div>
                                <div className="title alt-font"><h5>Business Citations</h5></div>
                                <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry.  </p></div>
                                <button type="button" className="review-btn alt-font">i want more review <span><i className="fa fa-angle-double-right"></i></span></button>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
                                <div className="Business-Advertising-content">
                                    <div className="icon">
                                        <span className=""><i className="fa fa-list"></i></span>
                                    </div>
                                    <div className="title alt-font"><h5>Sponsored listing</h5></div>
                                    <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry. </p></div>
                                    <button type="button" className="review-btn alt-font">i want more review <span><i className="fa fa-angle-double-right"></i></span></button>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
                                <div className="Business-Advertising-content">
                                    <div className="icon">
                                        <span className=""><i className="fa fa-list"></i></span>
                                    </div>
                                    <div className="title alt-font"><h5>Sponsored listing</h5></div>
                                    <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry.</p></div>
                                    <button type="button" className="review-btn alt-font">i want more review <span><i className="fa fa-angle-double-right"></i></span></button>
                                </div>
                            </div>
                            </div>
                            </div>
                        </section>
                        
                        <section className="Review-Management">
                            <div className="container">	
                                <div className="row">

                                    <div className="col-md-6">
                                        <h4 className="alt-font">Review Management with Unparalleled
                                    Control and visibility</h4>
                                    <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry.</p> 
                                    <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="./images/review-img.jpg" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <img src="./images/review-img-01.jpg" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="alt-font">Track Competitor Reviews</h4>
                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.Lorem Ipsum is simply text of the printing and typesetting industry.</p> 
                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                    </div>
                                    

                                </div>
                            </div>
                        </section>

                        <section className="search-use-section">
                            <div className="container">	
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="search-use-content">
                                        <div className="icon">
                                            <span className=""><i className="fa fa-group"></i></span>
                                        </div>
                                        <div className="title alt-font mt-3"><h5>Built for scale</h5></div>
                                        <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                                    </div>
                                </div>
                            <div className="col-md-3">
                                <div className="search-use-content">
                                    <div className="icon">
                                        <span className=""><i className="fa fa-check"></i></span>
                                    </div>
                                    <div className="title alt-font mt-3"><h5>Dashboard View</h5></div>
                                    <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="search-use-content">
                                    <div className="icon">
                                        <span className=""><i className="fa fa-globe"></i></span>
                                    </div>
                                    <div className="title alt-font mt-3"><h5>Performance Insights</h5></div>
                                    <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="search-use-content">
                            <div className="icon">
                            <span className=""><i className="fa fa-file-text-o"></i></span>
                            </div>
                            <div className="title alt-font mt-3"><h5>Reporting Suite</h5></div>
                            <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                            </div>
                            </div>

                            <div className="col-md-3">
                                <div className="search-use-content">
                                    <div className="icon">
                                        <span className=""><i className="fa fa-pencil"></i></span>
                                    </div>
                                    <div className="title alt-font mt-3"><h5>Review Managemet</h5></div>
                                    <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="search-use-content">
                            <div className="icon">
                            <span className=""><i className="fa fa-bullhorn"></i></span>
                            </div>
                            <div className="title alt-font mt-3"><h5>Direct Responses</h5></div>
                            <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="search-use-content">
                            <div className="icon">
                            <span className=""><i className="fa fa-paper-plane"></i></span>
                            </div>
                            <div className="title alt-font mt-3"><h5>Workflows</h5></div>
                            <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="search-use-content">
                            <div className="icon">
                            <span className=""><i className="fa fa-calendar"></i></span>
                            </div>
                            <div className="title alt-font mt-3"><h5>Historic Data</h5></div>
                            <div className="content-wrap"><p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p></div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </section>

                            <section className="try-now-sec">
                                <div className="container">	
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="alt-font">Give LocalClarity A Spin Now</h2>
                                        <button type="button" className="view-btn alt-font mt-3">Try Now</button>
                                    </div>
                                </div>
                                </div>
                            </section>
                            
                            <Slider category="4" title="latest Articles" data={this.postview} />
                            <Slider category="3" title="Top Video" data={this.postview} />
                            <Slider category="8" title="Product News" data={this.postview} />
                            <Slider category="17" title="BUsiness Tips" data={this.postview} />
                                    
                       
                </React.Fragment>
         );
    }
}
 
export default Home;