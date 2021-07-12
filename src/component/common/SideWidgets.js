import React, { Component } from 'react';
import services  from  './../../services/service';
// import {Link} from 'react-router-dom'


class SideWidgets extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:props.title,
            related:[]
		}
		console.log(props);
		this.update_service();
    }

    update_service = () =>{

		services("post/relatedPost/",{cat:this.props.category,length:this.props.length,id:this.props.id})
		.then((res)=>{
				console.log(res.data);
				this.setState({related:res.data.result});
		})

	}

	update_Sidebar(rel) {
		services("post/relatedPost/",{cat:this.props.category,length:this.props.length,id:rel})
		.then((res)=>{
				console.log(res.data);
				this.setState({related:res.data.result});
		})
	}
	
    render() { 

		const { related,title } =  this.state;
		console.log(related);
		console.log(this.props);
        return ( 

              <>  
                <div className="section-heading small text-left mt-4">
						<h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
					</div>
					
					<div className="tending-article">
						{ related.map((post,i)=>

							<div key={i} className="article-item mb-4">
                                {/* <Link to={'//localhost:3000/post/5-languages-you-should-consider-learning-this-year'} > Show </Link> */}
								<a onClick={()=>{
										this.update_Sidebar(post.ID)
										this.props.actionData(post.post_slug)
									}}>
									<div className="media">
										<img className="d-flex mr-3" src={post.link} alt="" />
										<div className="media-body">
											<h5 className="mt-0">{post.post_title}</h5>
										</div>
									</div>
								</a>
							</div>
						)}
							

					</div>
                </>    

         );
    }
}
 
export default SideWidgets;