import React, { Component } from 'react';

class SidebarSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    clickHendler = () =>{

    }
    render() { 
        return ( 
			
            <div className="search-category-box mb-3">
                <div className="input-group">
                    <form role="search" method="get" id="searchform" className="searchform" action="https://www.rateusonline.com/">
                        <input type="text"  name="s" id="s" className="form-control" placeholder="Search"/>
                        <input type="hidden" name="cat" value="" />
                        <div className="input-group-append">
                            <button className="btn search-btn" type="button" onClick={this.clickHendler}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form> 
                    
                </div>
            </div>
         );
    }
}
 
export default SidebarSearch;
