import React, { Component } from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import CategorySidebar from './../common/sidebar/categorysidebar'
import PostBanner from './../common/postbanner'
import services  from  './../../services/service';
import Pagination from './../../module/pagination'

class AchivePage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            year:this.props.match.params.year,
            month:this.props.match.params.month,
            posts:[],
            pageStart:0,
            pageEnd:12,
            postCount:0,
            selecetedPage:1,
            hasFetched:false,
            ArtcaleTitle:''
        }
        
        console.log(this.props.match.params.id);
        this.updateThePostData(this.props.match.params.year,this.props.match.params.month);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return {year:props.match.params.year,month:props.match.params.month}
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('shouldComponentUpdate');
        console.log(nextState);
        console.log(this.state);

        if(nextState.year !==  this.state.year || nextState.month !==  this.state.month){
            this.updateThePostData(nextState.year,nextState.month);
            return true;
       }else if(nextState.catId === this.state.catId){
           return true;
       }else{
           return true;
       }
    }
    
    

    updateThePostData = (year,month) =>{
        const {pageStart,pageEnd} = this.state;
        services(`post/archive/postlist`,{year,month,start:pageStart,length:pageEnd})
            .then((res)=>{
                console.log(res.data);
                this.setState({
                    posts: res.data.result,
                    postCount:res.data.result.length > 0 ? res.data.result[0].total : 0,
                    ArtcaleTitle:res.data.result.length > 0 ? res.data.result[0].publish_date : 0,
                });
        })
        
    }
    render() { 
        const {pageStart,pageEnd,posts,postCount,ArtcaleTitle}  = this.state;

        console.log(this.state);

        const list = posts.map((p,i)=>{           
            return (
                        <div key={i} className="col col-12 col-md-4">
                            <Link to={`/post/${p.post_slug}`} >
                                <div className="article-item">
                                    <div className="modified text-center">
                                        <span clss="date-month"><Moment format="MMMM YYYY">{p.publish_date}</Moment></span>
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
                <section class="section-gap">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-heading text-left">
                                    <h3>Monthly Archives: <span><Moment format="MMMM YYYY">{ArtcaleTitle}</Moment></span></h3>
                                </div>
                            </div>
                        </div>	
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9">
                            <div className="category-tabs">
                                <div className="articles">
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
 
export default AchivePage;