import React, { Component } from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import services  from  './../../../services/service';
import CategorySidebar from '../../common/sidebar/categorysidebar'


 const  Postdata = (props) =>{

    console.log(props);
    return (
        <h1>sadfkshfkjsdjkg</h1>
    )
}


export default Postdata;

// class PostData extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = { 
//             catId:this.props.id,
//             posts:[],
//             pageStart:0,
//             pageEnd:9,
//             postCount:0,
//             selecetedPage:1
//         }
//         console.log('post data');
//     }

//     updateThePostData = () =>{
//         const {pageStart,pageEnd} = this.state;
    
//         services(`category/postlist/${this.state.catId}`,{pageStart,pageEnd})
//             .then((res)=>{
//                 console.log(res.data);
//                 this.setState({posts: res.data.result,postCount:res.data.result[0].total,categoryTitle:res.data.result[0].title});
//         })
//     }
//     componentWillMount()
//     {   
//         this.updateThePostData();
//     }

//     callback = (num)=>{    
//         const {pageStart} = this.state;

//         var start= pageStart +  9;
//         //var end= start + 10;
//         this.setState({pageStart:start})
//         setTimeout(()=>{
//             this.updateThePostData();
//         },500)

//     }
//     render() { 

//         const {pageStart,pageEnd,posts,postCount,categoryTitle}  = this.state;
//         console.log(this.props);
       
//         const list = posts.map((p,i)=>{

           
//             return(
//                     <div class="col col-12 col-md-4">
//                         <Link to={`/post/${p.post_slug}`}>
//                             <div class="article-item">
//                                 <div class="modified text-center">
//                                     <span clss="date-month"><Moment format="DD MMM YYYY">{p.publish_date}</Moment></span>
//                                     {/* <span class="year"><Moment format="YYYY">{p.publish_date}</Moment></span> */}
//                                 </div>
//                                 <div class="article-image">
//                                     <img src={p.link} alt="" class="img-fluid" />
//                                 </div>
//                                 <div class="article-text text-center">                                                    
//                                     <p class="m-0"><b>{p.post_title}</b></p>
//                                     <p></p>
//                                     <button type="button" class="btn btn-success">Read More</button>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//             )
//         })

//         return ( 


//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-12 col-lg-9">
//                             <div class="category-tabs">
//                                 <div class="articles"><div class="section-heading text-left"><h3>{categoryTitle} <span>List</span></h3></div>
//                                     <div class="row  article-listing">

//                                             {list}
//                                     </div>
//                                 </div>
//                             </div> 
//                         </div>
//                         <CategorySidebar />		
//                     </div>
//                 </div>

//          );
//     }
// }
 
// export default PostData;