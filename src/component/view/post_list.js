import React, { Component } from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import CategorySidebar from './../common/sidebar/categorysidebar'
import PostBanner from './../common/postbanner'
import services  from  './../../services/service';
import Pagination from './../../module/pagination'

class PostList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            catId:this.props.match.params.id,
            posts:[],
            pageStart:0,
            pageEnd:12,
            postCount:0,
            selecetedPage:1,
            hasFetched:false,
            featurePost:'',
            featurePostTitle:'',
            featurePostSlug:'',
            featurePostImage:'',
        }
        
        console.log(this.props.match.params.id);
        this.updateThePostData(this.props.match.params.id);
    }

    static getDerivedStateFromProps(props, state) {
        return {catId:props.match.params.id}
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if(nextState.catId !==  this.state.catId){
            this.updateThePostData(nextState.catId);
            return true;
       }else if(nextState.catId === this.state.catId){
           return true;
       }else{
           return true;
       }
    }
    
    

    updateThePostData = (catId) =>{
        const {pageStart,pageEnd} = this.state;
        services(`category/postlist/${catId}`,{pageStart,pageEnd})
            .then((res)=>{
                console.log(res.data);
                this.setState({
                    posts: res.data.result,
                    postCount:res.data.result.length > 0 ? res.data.result[0].total : 0,
                    featurePost:res.data.result.length > 0 ? res.data.result[0].featurepost : 0
                });
        })

       
        services(`category/getcategoryfeature/${catId}`,{data:'tt'})
            .then((res)=>{
                console.log(res.data);
                
                this.setState({
                    categoryTitle: res.data.result[0].title,
                    catId:this.props.match.params.id,
                    featurePostTitle:res.data.result[0].post_title,
                    featurePostSlug:res.data.result[0].post_slug,
                    featurePostImage:res.data.result[0].link,
                    seoData:res.data.result[0]
                });
        })
        
    }

  
    callback = (num)=>{    
        const {pageStart} = this.state;

        var start= (num - 1) *  12;
        //var end= start + 10;
        this.setState({pageStart:start})
        setTimeout(()=>{
            this.updateThePostData(this.state.catId);
        },500)

    }

   
    render() { 

        const {pageStart,pageEnd,posts,postCount,categoryTitle}  = this.state;

        console.log(this.state);

        const list = posts.map((p,i)=>{

           
            return(
                    <div key={i} className="col col-12 col-md-4">
                        <Link to={`/post/${p.post_slug}`} >
                            <div className="article-item">
                                <div className="modified text-center">
                                    <span clss="date-month"><Moment format="DD MMM YYYY">{p.publish_date}</Moment></span>
                                </div>
                                <div className="article-image">
                                    <img src={p.link} alt="" className="img-fluid" />
                                </div>
                                <div className="article-text text-center">                                                    
                                    <p className="m-0"><b>{p.post_title}</b></p>
                                    <p></p>
                                    <button type="button" className="btn btn-success">Read More</button>
                                </div>
                            </div>
                        </Link>
                    </div>
            )
        })


        return ( 

            <>    
                <PostBanner  data={this.state} />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9">
                            <div className="category-tabs">
                                <div className="articles"><div className="section-heading text-left"><h3>{categoryTitle} <span>List</span></h3></div>
                                    <div className="row  article-listing">

                                            {list}
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <CategorySidebar />		
                    </div>
                </div>
                <Pagination data={postCount}  callback={this.callback}  viewnumber={pageEnd}/>
            </>
         );
    }
}

// export const showData = (type,slug) =>{

//     return {
//                 type:'View_Data', 
//                 data:{type,slug}
//             }
// }

// const mapStateToProps = (state,ownstate)=>{
//     console.log(state);
//     console.log(ownstate);

//     return {
//        postdataa:state.data
//    }
// }

// const mapDispatchToProps = (dispatch) =>{

//    return {
       
//        pushdata : (type,slug) => dispatch(showData(type,slug))
//    }
// }

// export default connect( mapStateToProps,mapDispatchToProps)(PostList);

export default PostList