import React, { Component } from 'react';
import services  from  './../../services/service';
import { Link } from 'react-router-dom'

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                video:[],
                id:this.props.match.params.id,
                title:'',
                content:'',
                seoData:[],
                primary:'',
                related:[],
                videoId:''

         }
         this.updateVideoData(this.props.match.params.id)
         this.releatedVideoData(this.props.match.params.id)
        
    }
    
    
    releatedVideoData(videoId){
       
        services("post/relatedVideoPost/",{cat:'videos',length:22,id:videoId})
		.then((res)=>{
				console.log(res.data);
				this.setState({related:res.data.result});
		})
    
    }   
    static getDerivedStateFromProps(props, state) {
        return {id:props.match.params.id}
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if(nextState.id !==  this.state.id){
            this.updateVideoData(nextState.id);
            this.releatedVideoData(nextState.id)
            return true;
       }else if(nextState.id === this.state.id){
           return true;
       }else{
           return true;
       }
    }

    updateVideoData = (postId) =>
    {
        services("post/getPost/"+postId,{data:'tt'})
            .then((res)=>{
                console.log(res.data);
                const {post_title,content,primary_category,ID} = res.data.result[0];
                this.setState({title:post_title,content,primary:primary_category,seoData:res.data.result[0]});
               // this.releatedVideoData(ID)
        })
    }

    render() { 
    const { title,content, related } =  this.state ;
        console.log(this.state);

        const relatedsection= related.splice(10)
        
        return ( 
            <>
            <section className="section-gap pb-0"> 
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading text-left">
                        <h1 style={{fontSize: 28 }}>{title}</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div className="container"> 
            <div className="row"> 
                <div className="col-md-12 mb-4"> 
                    <div className="blue-box-cta text-white">                        
                        <div className="related-video-cta">
                            <div className="row no-gutters">
                                <div className="col col-12  col-sm-12 col-md-7 col-lg-8">
                                    <div className="innnervideo-single"> 
                                        <iframe 
                                        className="video-size" 
                                        src="https://www.youtube.com/embed/GqywjwqFH94?autoplay=0" 
                                        width="100%" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen="" 
                                        __idm_id__="88004609">

                                        </iframe>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-5 col-lg-4">
                                    <div className="more-relatedvideo-box">
                                        <h5 className="mb-4">Related Videos</h5>
                                        <div className="videolisting">
                                           {related.map((v,i)=>(
                                                <div className="listitems" key={i}>
                                                    <Link to={`/videos/${v.post_slug}`} >
                                                        <img className="thumbs-img" src={v.link} alt="Top 5 UK Living Room Ideas for 2021" />
                                                    </Link>
                                                    <div className="listcontent">
                                                        <p className="m-0"><Link to={`/videos/${v.post_slug}`} >{v.post_title}</Link></p>
                                                    </div>
                                                </div> 
                                           ))} 
                                                                 
                                        </div>							
                                    </div>
                                </div>
                            </div>
                        </div>				
                    </div>
                </div>
            </div>
        </div>
        <div className="container"> 
            <div className="row"> 
                <div className="col-md-12"> 
                    <div className="blue-box-cta text-white">
                        <small className="text-uppercase">Videos</small>
                            <p dangerouslySetInnerHTML ={{__html:content}}></p>                            
                        <div className="released-date-cta mt-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row my-5 new-video-box-cta">
                <div className="col col-12 col-sm-12 col-md-12">
                    <div className="section-heading text-left"> 
                        <h3>Top <span>Videos</span></h3>
                    </div>
                </div>
                {relatedsection.map((v,i)=>(
                
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-3">
                        <div className="new-video-box">
                            <div className="image-box">
                                <div className="play-icon"><i className="fa fa-play"></i></div>
                                <Link to={`/videos/${v.post_slug}`} >
                                    <img className="img-fluid" alt="" src={v.link} />
                                </Link>
                            </div>
                            <div className="video-content-box">
                                <h4><Link to={`/videos/${v.post_slug}`} >{v.post_title} </Link></h4>
                                <p className="text-uppercase m-0">Videos</p>
                            </div>
                        </div>
                    </div>
                ))}
                    
                <div className="col-12 text-center my-5">
                    <button type="button" className="btn btn-success round-red-btn">Load More</button>
                </div>	
            </div>
            
            
        </div>
        </>
         );
    }
}
 
export default Video;