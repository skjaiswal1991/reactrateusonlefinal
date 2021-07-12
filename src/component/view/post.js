import React, { Component } from 'react';
import services  from  './../../services/service';
import Sidebar from '../common/sidebar/sidebar';
import PreLoader from './../common/preloader'
import Seo from  './../../module/seo'
import Comment from './../common/comment'
import {
   
    FacebookShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
    TwitterShareButton,
  
  } from "react-share";

  import {
     FacebookIcon,
    LinkedinIcon,

  } from "react-share" 
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                title:'',
                content:"",
                primary:0,
                id: this.props.match.params.id,
                seoData:[]
                

         }
         console.log(props);
    }

    postview =(e) =>{
        //update_service();
        this.props.history.push(`/post/${e}`)
        this.setState({id:e})
        setTimeout(()=>{
            this.update_service();
        },500)
        

    }

    update_service = () =>{
        const { id } = this.state;
        console.log(this.props);
        services("post/getPost/"+id,{data:'tt'})
            .then((res)=>{
                console.log(res.data);
                const {post_title,content,primary_category} = res.data.result[0];
                this.setState({title:post_title,content,primary:primary_category,seoData:res.data.result[0]});
        })

    }
    componentWillMount(){
        console.log(this.props);
        this.update_service();
    }

    render() { 
        const {title,content,primary,seoData}  =this.state;
        console.log(this.props);
        return (
            <>
                <Seo property={seoData}  /> 
                <section className="mb-5">
                    <div className="container clearfix" style={{position: 'relative'}}>
                        <div className="row" id="main-content">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-8 mt-3" id="right">
                                
                                <div className="section-heading text-left">
                                
                                    <h1 style={{fontSize: 28}}>{title}</h1>
                                    <p className="m-0"><b>Date</b> : </p>
                                    <p className="m-0"><b>Author</b> : </p>
                                    
                                </div>
                                        
                                <div className="article-item"> 
                                    {/* {{content}} */}
                                    <div dangerouslySetInnerHTML={{ __html: content }} />                           
                                    <div className="form-box-gray my5 mx-auto">                              
                                    </div>			
                                    <div className="clearfix"></div>
                                </div>
                                <FacebookShareButton url="https://www.rateusonline.com/top-7-gadgets-for-sleep/" >
                                    <FacebookIcon size={32} round={true} /> 
                                </FacebookShareButton>
                                <LinkedinShareButton url="https://www.rateusonline.com/top-7-gadgets-for-sleep/" >
                                    <LinkedinIcon size={32} round={true} /> 
                                </LinkedinShareButton>
                                <div>
                                    <Comment postID={seoData.ID} />
                                </div>	
                            </div>

                            <div class="col col-12 col-sm-12 col-md-12 col-lg-4 mt-3 is-affixed" id="sidebarpost" style={{position: 'relative'}}>				
                                <aside class="sidebar__inner" style={{position: 'relative',transform: 'translate3d(0px, 0px, 0px)'}}>
                                    {primary === 0 ? <PreLoader  /> :<Sidebar releated={primary} id={seoData.ID}  actionData={this.postview} />}	
                                </aside>
                            </div>
                                
                        
                    </div>
                </div>	    
            </section>
        </> 
         );
    }
}
 
export default Post;