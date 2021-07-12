import React, { Component } from 'react';
import services  from  './../../services/service';
import { Link } from 'react-router-dom'


class VideoCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
            postCount:'',
            categoryTitle:'',
            catId:this.props.match.params.id,
            pageEnd:18,
            pageStart:0,
         }
         this.updateThePostData();
    }

  
    updateThePostData = () =>{
        const {pageStart,pageEnd} = this.state;
        services(`category/postlist/videos`,{pageStart,pageEnd})
            .then((res)=>{
                console.log(res.data);
                this.setState({posts: res.data.result,postCount:res.data.result[0].total,categoryTitle:res.data.result[0].title});
        })
    }


    render() { 

        const { posts,categoryTitle }  = this.state;
  console.log(posts);
        const toppost = posts.splice(2)
        console.log(toppost);
        return ( 
            <section className="section-gap"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="new-heading-full">
                                    <h2 className="new-heading"><span className="fullline">Video List</span></h2>
                                </div>
                            </div>		
                        </div>
                        
                        <div className="row my-5 new-video-box-cta">
                        {posts.map((p,i)=>(

                       
                            <div key={i} className="col col-12 col-sm-12 col-md-6">
                                <div className="new-video-box">
                                    <div className="image-box" data-toggle="tooltip" data-html="true" title="" 
                                    data-original-title="<p><strong>Heading</strong></p><p><p>Is working from home the new normal? One effect of the coronavirus pandemic has been a huge increase in the […]</p>
                                    </p>">
                                        <div className="play-icon"><i className="fa fa-play"></i></div>
                                        <Link to={`/videos/${p.post_slug}`}>
                                            <img className="img-fluid" alt="" src={p.link} />
                                        </Link>
                                    </div>
                                    <div className="video-content-box">
                                        <h4><Link to={`/videos/${p.post_slug}`}>{p.post_title}</Link></h4>
                                        <p className="text-uppercase m-0">Videos</p>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                        {toppost.map((p,i)=>(
                            <div key={i} className="col col-12 col-sm-12 col-md-4 col-lg-3">
                                <div className="new-video-box">
                                    <div className="image-box" data-toggle="tooltip" data-html="true" title="" 
                                    data-original-title="<p><strong>Heading</strong></p><p>We have all faced or know someone who has faced struggles in the year 2020. Thousands of people have lost […]</p>">
                                        <div className="play-icon"><i className="fa fa-play"></i></div>
                                        <Link to={`/videos/${p.post_slug}`}>
                                            <img className="img-fluid" style={{maxHeight:171}} alt="" src={p.link} />
                                        </Link>
                                    </div>
                                    <div className="video-content-box">
                                        <h4><Link to={`/videos/${p.post_slug}`}>{p.post_title}</Link></h4>
                                        <p className="text-uppercase m-0">{categoryTitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}    
                            

                            <div className="col-12 text-center my-5">
                                <button type="button" className="btn btn-success round-red-btn">Load More</button>
                            </div>	
                        </div>
                        
                        
                    </div>
                    </section>
         );
    }
}
 
export default VideoCategory;