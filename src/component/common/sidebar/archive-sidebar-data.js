import React, { Component } from 'react';
import services from '../../../services/service'
import { Link } from 'react-router-dom'
import {config } from './../../../config/config'
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom'

class ArchiveSidebarData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            archive:[]
         }
         this.updateData();
    }
    
    updateData =() =>{
        services('post/archive/sidebar',{year:2019}).then((data)=>{
            console.log(data.data);
            
            this.setState({archive:data.data.result});

        })
    }


    render() { 
        const { archive } = this.state;
        return ( 
            <div className="archive-cta mb-3">
                    <h3 className="text-center text-uppercase heading">Archieve</h3>
                    <div className="archive-list">
                            <ul className="list-group mb-3">  
                                  {archive.map((ar,i)=>(
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                          <Link to={`/archive/${ar.year}/${ar.month}`} ><Moment format="MMMM  YYYY">{ar.publish_date}</Moment></Link>
                                          ({ar.count})</li>
                                  ))}  
                                    
                            </ul>
                    </div>
            </div>
         );
    }
}
 
export default withRouter(ArchiveSidebarData);