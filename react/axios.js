import React, { Component } from 'react';
import axios from 'axios';

class NewAxios extends Component {
    
    render() { 
        return ( 
            <li>Hello World</li>
         );
  }

 
componentDidMount(){
    const promise = axios.get(
        'http://www.dell-lee.com/react/api/demo.json'
    );
   promise.then((res)=>{
        console.log(res.data)
        console.log(res)
    })
}
}
export default NewAxios;