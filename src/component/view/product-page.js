import React, { Component } from 'react';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <section class="product-banner">
                <span>Home/Product</span>
                <p>About Us</p>
            </section>

            <section class="our-business">
                <h1>Our Business Advertising <br />and marketing services</h1>
                <div class="container our-business-blocks">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="blocks">
                                <i class="fa fa-desktop"></i>
                                <h2>Website design and development</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, lectus nisl imperdiet turpis, id facilisis ipsum nunc id urna. Vestibulum vitae felis varius pharetra mauris et, condimentum lorem.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="blocks">
                                <i class="fa fa-search"></i>
                                <h2>SEO</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, lectus nisl imperdiet turpis, id facilisis ipsum nunc id urna. Vestibulum vitae felis varius pharetra mauris et, condimentum lorem.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="blocks">
                                <i class="fa fa-search"></i>
                                <h2>PAID ADDS</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, lectus nisl imperdiet turpis, id facilisis ipsum nunc id urna. Vestibulum vitae felis varius pharetra mauris et, condimentum lorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="organic-search">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="phone-section">
                                <img src="./images/mockup-phone.png"  class="img-responsive"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="text-section">
                                <h2>ORGANIC SEARCH</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, lectus nisl imperdiet turpis, id facilisis ipsum nunc id urna. Vestibulum vitae felis varius, pharetra mauris et, condimentum lorem. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, </p>
                                <a class="btn btn-normal btn-white">SEARCH MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="paid-add">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="text-section">
                                <h2>ORGANIC SEARCH</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, lectus nisl imperdiet turpis, id facilisis ipsum nunc id urna. Vestibulum vitae felis varius, pharetra mauris et, condimentum lorem. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, </p>
                                <a class="btn btn-normal btn-red">SEARCH MORE</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="phone-section">
                                <img src="./images/mockup-phone.png"  class="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="design-development">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="phone-section">
                                <img src="./images/mac.png"  class="img-responsive" />
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="text-section">
                                <h2>ORGANIC SEARCH</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, lectus nisl imperdiet turpis, id facilisis ipsum nunc id urna. Vestibulum vitae felis varius, pharetra mauris et, condimentum lorem. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie, risus posuere viverra fringilla, </p>
                                <a class="btn btn-normal btn-white">SEARCH MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="help-form-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-section">
                                <h2>FIND OUT HOW WE CAN HELP YOU</h2>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input class="form-control" id="uname1" name="uname1" required="" type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input class="form-control" id="uname1" name="uname1" required="" type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input class="form-control" id="uname1" name="uname1" required="" type="text" placeholder="COntact Number" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input class="form-control" id="uname1" name="uname1" required="" type="text" placeholder="Business Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input class="form-control" id="uname1" name="uname1" required="" type="text" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option selected value="0">Postcode</option>
                                                    <option>15268</option>
                                                    <option>15268</option>
                                                    <option>15268</option>
                                                    <option>15268</option>
                                                    <option>15268</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                                            <a class="btn btn-red">REQUEST A CALL BACK</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
         );
    }
}
 
export default ProductPage;