import React, { Component } from 'react';
import PostList from './post_list'
import { connect } from 'react-redux'

class Category extends Component {
    constructor(props) {
        super(props);
            this.state = {id:props.match.params.id}   
    }
    render() { 
        console.log(this.props);
        const { slug } = this.props.cat
        return ( 
                    <PostList id={slug ? slug : this.state.id} />
         );
    }
}
 
const mapStateToProps = (state)=>{
    //console.log(this.state.allsongs);
    return {
       cat:state.viewdata
   }
}

const mapDispatchToProps  =(dispatch) =>{


}
export default connect(mapStateToProps,mapDispatchToProps)(Category);