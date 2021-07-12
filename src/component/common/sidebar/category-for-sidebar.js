import React, { Component } from 'react';
import services from '../../../services/service'
import { Link } from 'react-router-dom'
import {config } from './../../../config/config'
class CategoryforSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategory:[1,7,14,5,6,9,11,8],
            category:[]
        }

        this.updateData();
    }

    updateData =() =>{
        services('category/list').then((data)=>{
            console.log(data.data);
            
            if(data.data.result){
                var cat = data.data.result.filter(x => this.state.showCategory.indexOf(x.id) !== -1)
            }
            this.setState({category:cat});

        })
    }
    render() { 
        const { category }  = this.state;
        console.log(this.state.category);
        return ( 
            <div className="archive-cta mb-3">
				<h3 className="text-center text-uppercase heading">Categories</h3>
				<div className="archive-list">
					<ul className="list-group">
                        {category.map((cat,i)=>(
                            <li className="list-group-item d-flex align-items-center">
                                <img width="50" height="50" src={config.ROOT+cat.link} 
                                className="attachment-50x50 size-50x50" alt=""  sizes="(max-width: 50px) 100vw, 50px"/>											
                                <Link className="nav-link active" to={`/category/${cat.slug}`}>{cat.title}</Link>
                            </li>
                        ))}									
					</ul>
				</div>
			</div>
         );
    }
}
 
export default CategoryforSidebar;
