import React, { Component } from 'react';
import {List} from 'antd';
import { Link } from 'react-router-dom';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


class NewList extends Component {
    
    render() {
        console.log("success") 
        return ( 
          
         <Link to='/button'>
            <List
            style={{
					marginLeft: 20,
					marginTop: 20,
					marginRight: 20
				}}
            header={<div>Hearder</div>}  
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
  />
  </Link>
         );
    }
}
 
export default NewList;