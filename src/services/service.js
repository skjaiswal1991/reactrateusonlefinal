import React, { Component } from 'react';
import API  from './../statics/config';
import axios from 'axios';

const services = async( url, data)=>{

            
            return await new Promise((resolved,reject)=>{


                    axios({
                        method: 'post',
                        url: API+url,
                        data: data
                    })
                    .then(function (response) {
                            resolved(response)
                      })
                      .then((error)=> reject(error))
                      
            })

}

export default services;

