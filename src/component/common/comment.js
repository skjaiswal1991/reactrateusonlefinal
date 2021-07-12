import React, { Component } from 'react';
//import Message from './../../module/errorMessage'
import services  from  './../../services/service';


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checkValid:false,
            name:'sanjay',
            email:'skjaswal9019@gmail.com',
            content:'test message',
            post_id:props.postID
         }
    }

    inputHendler = (e) =>{
        const{name,value} = e.target;
        this.setState({[name]:value})
    }

    submitHendler = (e) =>{
        e.preventDefault();
        console.log("I am here");
        services("comment/add/",this.state)
            .then((res)=>{
                console.log(res);
                //const {post_title,content,primary_category} = res.data.result[0];
                //this.setState({title:post_title,content,primary:primary_category,seoData:res.data.result[0]});
        })
            console.log(this.props);
            
    }

    validation = () =>{
        
    }
    render() {
        
        const {name,email,content} = this.state;
        return ( 
            
            <div style={{background: 'lightgrey',padding: 11}}>
                <h3>Comment and Replay</h3>
                <form onSubmit={this.submitHendler}>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6" style={{paddingTop:10}} >
                            <input class="form-control" name="name" placeholder="Name" type="text"  onChange={this.inputHendler} value={name} required autofocus />
                            {/* <Message msg="Please Enter Name" /> */}
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6" style={{paddingTop:10}} >
                            <input class="form-control" name="email" placeholder="Email" onChange={this.inputHendler}  type="Email" value={email} required />
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12" style={{paddingTop:10}} >                            
                            <textarea className="form-control" placeholder="Please Write Message" onChange={this.inputHendler}  name="content" value={content} />                                
                        </div>                    
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12" style={{paddingTop:10}} >
                            <input type="submit" className="btn btn-primary" Value="Submit" ></input> 
                        </div>
                    </div>                    
                </form>
            </div>
         );
    }
}
 
export default Comment;