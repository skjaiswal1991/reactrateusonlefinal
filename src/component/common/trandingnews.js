import React, { Component } from 'react';   

class Tranding extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <section className="marquee-section-01">
                <div className="container-fluid p-0 m-0">
                    <div className="row no-gutters news-feed">
                        <div className="col col-12 col-md-12 col-lg-5 col-xl-3 text-md-center text-sm-center text-center">
                            <div className="first text-uppercase p-2">
                                <span className="mr-3">
                                    <img src="https://www.rateusonline.com/wp-content/themes/wp_525/assets/images/fire-icon.png" />
                                </span> Trending business news 
                            </div>
                        </div>
                        <div className="col col-12 col-md-12 col-lg-7 col-xl-9">
                            <div id="run-text">
                                <div id="text">
                                    {/* <marquee behavior="scroll" direction="left" onMouseOver="this.stop();" onMouseOut="this.start();"> */}
                                    <marquee behavior="scroll" direction="left" >
                                            <a className="marquee" id="63">Business News</a>
                                            <a className="marquee" id="51">Coronavirus</a>
                                            <a className="marquee" id="108">Data</a>
                                            <a className="marquee" id="61">Product News Update</a>
                                            <a className="marquee" id="68">Scientific Breakthroughs</a>
                                            <a className="marquee" id="64">Smartphones</a>
                                            <a className="marquee" id="65">Technology</a>
                                            <a className="marquee" id="66">Well Being</a>
                                            <a className="marquee" id="58">Workplace</a>
                                    </marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Tranding;