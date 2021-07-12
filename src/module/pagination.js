import React, {useState,useRef,useEffect } from 'react';


const Pagination = (props) =>{


             const [selecetedPage, setselecetedPage] = useState(1);
             console.log(props);
             var data= props.data / props.viewnumber;
             var data = props.data % props.viewnumber == 0 ? data  : data + 1 ;
             console.log(data);
           // setselecetedPage(props.selected)
                
            var pagi = []
            for( var i = 1; i<data; i++){
                pagi.push(i); 
            }
            console.log(props.selected);

           return(

               <>
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="sabai-directory-listings-container">	   
                                <div className="sabai-navigation sabai-navigation-bottom sabai-clearfix">
                                    <div className="sabai-pull-left"><span>Page 1 of {props.data}</span></div><div className="sabai-pull-right">
                                        <div className="sabai-pagination sabai-btn-group">
                                            <a className="sabai-btn sabai-btn-default sabai-btn-sm sabai-disabled">«</a>
                                            {pagi.map((pagi,i)=>(
                                                    <a key={i} onClick={()=>{
                                                        props.callback(pagi)
                                                        setselecetedPage(pagi)
                                                    }} className={pagi == selecetedPage? "sabai-btn sabai-btn-default sabai-btn-sm sabai-active": "sabai-btn sabai-btn-default sabai-btn-sm"}>{pagi}</a>
                                                ))}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
 


}

export default Pagination;