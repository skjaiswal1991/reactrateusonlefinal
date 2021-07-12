import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <section className="footer-section">
                    <div className="container">	
                        <div className="row">
                            <div className="col-md-4 footer-wrap">
                                <img src="/images/logo.png" alt="logo" />
                                <p className="mt-3">RateUsOnline is a business directory that endorses business and products that get a high number of quality reviews and recommendations.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="imp-links">
                                    <h5 className="alt-font">Important Links</h5>
                                    <ul className="list">
                                        {/* <li><a href="#">Home</a></li>
                                        <li><a href="#">About US</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Cookies Policy</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="address-links">
                                    <h5 className="alt-font">Get In Touch</h5>
                                    <div className="address-links-inner">
                                        <div className="info mt-3"><div className="icon-footer"><i className="fa fa-envelope"></i></div><p>info@RateUsOnline.com</p></div>
                                        <div className="info mt-3"><div className="icon-footer"><i className="fa fa-map-marker"></i></div>
                                            <p>kemp House,160 City Road,London, United Kingdom,ECIV 2NX</p>
                                        </div>
                                        <div className="info mt-3"><div className="icon-footer"><i className="fa fa-phone"></i></div><p>+44 7375 676935</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <hr style={{border: '1px solid #fff'}}/>
                        <div className="copyright alt-font"><p>© Copyright 2020 RateUsOnline</p></div>
                    </div>
                </section>
         );
    }
}
 
export default Footer;
