import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import NewButton from './newButton'
import NewList from './newList'
// import Test from './Test'
 //import App from './App';
//import TodoList from './TodoList'
//JSX语法
//import Counter from './Counter'
import 'antd/dist/antd.css';
//import NewAxios from './axios


class Entry extends Component {
   
    render() { 
        return ( 
            <BrowserRouter>
            <div>
            <Route path='/list/:id' 
            component = {NewList}
            />
            <Route path='/button' component={NewButton}/>
             
            </div>
            </BrowserRouter>
         );
    }
}
ReactDOM.render(<Entry />, document.getElementById('root'))

