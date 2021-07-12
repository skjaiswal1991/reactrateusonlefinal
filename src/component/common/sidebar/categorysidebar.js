import React, { Component } from 'react';
import SidebarSearch from './../search/sidebarsearch'
import CategoryforSidebar from './category-for-sidebar'
import ArchiveSidebarData from  './archive-sidebar-data'
class CategorySidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="col-md-12 col-lg-3">
			    <SidebarSearch />
			<div className="recomonded-post mb-3">
				<h3 className="text-center text-uppercase heading">Recommended <span>Posts</span></h3>
				<div className="postarea">
					 

					<div className="post-box text-center  mb-3">
						<h4>
							<a href="https://www.rateusonline.com/xg12-mini-wireless-5-0-bluetooth-headset-product-review/">XG12 Mini Wireless 5.0 Bluetooth Headset – Freedom from Cables</a>
						</h4>
							<a href="https://www.rateusonline.com/xg12-mini-wireless-5-0-bluetooth-headset-product-review/"></a>
						<p>
							<a href="https://www.rateuson line.com/xg12-mini-wireless-5-0-bluetooth-headset-product-review/"></a>
							<a href="https://www.rateusonline.com/xg12-mini-wireless-5-0-bluetooth-headset-product-review/">Read More</a>
						</p>
					</div>

					 

					<div className="post-box text-center  mb-3">
						<h4><a href="https://www.rateusonline.com/gresunny-neck-phone-holder-product-review/">Gresunny Neck Phone Holder Product Review</a></h4><a href="https://www.rateusonline.com/gresunny-neck-phone-holder-product-review/">
						</a><p><a href="https://www.rateusonline.com/gresunny-neck-phone-holder-product-review/"></a><a href="https://www.rateusonline.com/gresunny-neck-phone-holder-product-review/">Read More</a></p>
					</div>

										
				</div>
			</div>
			<CategoryforSidebar />
			<ArchiveSidebarData />
		</div>
         );
    }
}
 
export default CategorySidebar;