import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import services  from  '../../../services/service';
import SideWidgets from '../SideWidgets';
import SidebarSearch from './../search/sidebarsearch'
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            related:[],
            
		}
		console.log(props);
	
    }

	
    render() { 

		const { related } =  this.state;
		console.log(related);
		console.log(this.props);
        return ( 
            <div className="col col-12 col-sm-12 col-md-12 col-lg-4 mt-3" id="sidebarpost" className="sidebar">
				
				<aside className="sidebar__inner">
					<div className="section-heading small text-left mt-4">				
							<a href="https://www.rateusonline.com/add-directory-listing/">
								<img  className="img-fluid" src="https://www.rateusonline.com/wp-content/uploads/2020/06/banner-v2-1.jpg" />
							</a>
					</div>
					<SidebarSearch />
					
					<SideWidgets  title={'Related <span>Article</span>'} category={this.props.releated} {...this.props}  length="7"/>
					<SideWidgets  title={'Trending <span>Articles</span>'} category="4" {...this.props} length="4" />
					
				</aside>								
			</div>
         );
    }
}
 
export default Sidebar;