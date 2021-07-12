import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import services  from  './../../services/service';
import { connect } from 'react-redux';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        menu:[],
                    }

        services("menu/edit/9",{data:'tt'})
            .then((res)=>{
                console.log(res.data);
                this.setState({menu: JSON.parse(res.data.result[0].menudata)});
        })
                                                                   
    }

    OnClickHendler  = ( type,slug) =>{
        // console.log(type);
        // console.log(slug);
        // var data = {type,slug}
        // this.props.pushdata(data)
    }
    
       
    render() { 
        const { menu } = this.state;
        console.log(menu);

        const Submenu = (props) =>{  
            console.log(props);          
            var title = props.title;            
                return(
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle alt-font" title="sds" href="#" id="navbarDropdownXL" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           {title} 
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownXL">
                        
                        {props.children.map((ch,i)=>(

                                <Link key={i}  to={`/${ch.type}/${ch.slug}`} onClick={()=>this.OnClickHendler(ch.type,ch.slug)} className="dropdown-item">{ch.title}</Link>
                            
                        ))}
                        </div>
                        
                    </li>   
                )
            
        }
        
        const ParentMenu = (props) =>{
            const {title,slug,type} = props;
                var types = slug === 'videos' ? '' : type
                var slugs = slug  ? slug : ''
                return(
                    <li className="nav-item ">
                        {types ? (
                            <Link to={`/${types}/${slugs}`} className="nav-link alt-font" >{title} <span className="sr-only">(current)</span></Link>
                            ):(
                                <Link to={`/${slugs}`} className="nav-link alt-font" >{title} <span className="sr-only">(current)</span></Link>   
                            )}
                    </li>)
        }
        
        return ( 
            <nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                                {menu.map((m,i)=>(
                                        <div key={i}>
                                             {m.children ? (<Submenu {...m} />):(<ParentMenu {...m} />)} 

                                        </div>
                                ))}
                            </ul>
                    </div>
                </div>
            </nav>
           
         );
    }
}


export const showData = (data) =>{

    console.log(data);
    return {
                type:'VIEW_DATA', 
                data
            }
}

 
const mapStateToProps = (state)=>{
     //console.log(this.state.allsongs);
     return {
        posts:state.post
    }
}

const mapDispatchToProps = (dispatch) =>{

    return {
        
        pushdata : (data) => dispatch(showData(data))
    }
}
 
export default connect( mapStateToProps,mapDispatchToProps)(Navbar);