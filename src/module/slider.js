import React, { Component } from 'react';

// import Carousel from "react-elastic-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-elastic-carousel";
import {Card,Button} from 'react-bootstrap';
import services  from  './../services/service';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            start:0,
            length:5,
            cat:props.category,
            title:props.title,
          }

    }

    componentWillMount(){
        const {start,length}  = this.state; 
        // services("Post/listPost",{start,length,cat:4})
        //     .then((res)=>{
        //         console.log(res.data);
        //         this.setState({posts: res.data.result});
        // })
        this.UpdateData(start,length);
    }

    UpdateData = (start,length) =>{

        
        services("Post/listPost",{start,length,cat:this.state.cat})
        .then((res)=>{
            console.log(res.data);
            this.setState({posts: res.data.result});
    })

    }
    nextData = () =>{
        const {start,length}  = this.state;
        this.setState({length:length + 1})
        this.UpdateData(start,length + 1);
        //alert('Next');

    }

    prevData = () =>{

        const {start,length}  = this.state; 
        this.setState({length:length - 1})       
        this.UpdateData(start,length);
        
    }
    postview = (slug) =>{
      
        this.props.data(slug)
    }
    //<div className="itemslider" style={{height:250}} key={item.id}>{item.title}</div>
    render() { 
        const {items,posts,title} = this.state;
        return ( 

            <section className="latest-article-section">
                <div className="container">	
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="alt-font mb-4">{title}</h3>
                        </div>
                        <Carousel breakPoints={breakPoints} pagination={false} onNextStart={this.nextData} onPrevStart={this.prevData}>
                            {posts.map((item,i) =>
                                        <Card key={i} style={{ width: '15rem' }}>
                                            <Card.Img variant="top" src={item.path} style={{height:170}} />
                                            <Card.Body style={{textAlign: 'center'}}>
                                                <Card.Text style={{height: 90}}>{item.post_title}</Card.Text>
                                                <Button variant="primary" onClick={()=>this.postview(item.post_slug)}>View More</Button>
                                            </Card.Body>
                                        </Card>
                                    )}
                        </Carousel>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Slider;