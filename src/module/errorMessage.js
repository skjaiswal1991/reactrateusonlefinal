import React, { Component } from 'react';
import {Alert} from 'react-bootstrap'
const type =[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]

const Message =  (props) =>{

        return (
            <Alert variant={type[3]}>
                {props.msg}   
             </Alert>
        )

}

export default Message;