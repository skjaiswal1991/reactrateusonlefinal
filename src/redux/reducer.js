//[]
import React, { Component,useEffect } from 'react';
import service from '../services/service'
let init = {
    posts:[],
    pages:[],
    category:[],
    menus:[],
    data:[]
}

export default function reducer(state = init, action)
{
    console.log(action);

    // if( action.type === 'VIEW_DATA') {
    //     console.log(action.data)
    //     let viewData  = action.data 


    //     return {    
    //         ...state,
    //         ...action.data
    //     };

    // }else if( action.type === 'ADD_POST')
    // {

    // }

    switch(action.type)
    {
        case 'VIEW_DATA':
            console.log("I am here")
            //fetch(`http://localhost:5000/api/category/postlist/personal-care`).then((data)=>data.json()).then(data=>{console.log(data)})
//         .then((res)=>{
//             console.log(res.data);
//             this.setState({posts: res.data.result,postCount:res.data.result[0].total,categoryTitle:res.data.result[0].title});
//     }) 
        //    let data =  addFunction()
            return {
                ...state,
            viewdata:action.data,
            
            }
            break;
        
        default:
            return state;
    }   
    // if( action.type === 'POST')
    //     return [
    //         ...state,
    //         {
    //             id:'id',
    //             title:'asdas'
    //         }
    //     ]

    //  else if (action.type === 'PAGE')
    //  return state.filter(page =>page.id === 1 ) 
     
    return state;  
}

// const addFunction = () => {
//     useEffect(){
//         services(`category/postlist/${this.state.catId}`,{pageStart,pageEnd})
//         .then((res)=>{
//             console.log(res.data);
//             this.setState({posts: res.data.result,postCount:res.data.result[0].total,categoryTitle:res.data.result[0].title});
//     }) 
//     }
    
// }