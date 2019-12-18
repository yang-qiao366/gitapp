import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './Todoitem'

class TodoList extends Component {
    constructor(props) {
		super(props);
        this.handleIputChange = this.handleIputChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handItemClick = this.handItemClick.bind(this);

		this.state = {
			inputValue: 'hellow',
			list: ['learn React','learn Vue']
		}
    }

    handleIputChange(e){
        
           console.log(this)
           this.setState({
               inputValue: e.target.value
           })
           // inputValue: e.target.value
    }

    handleKeyUp(e){
        console.log(e.keyCode)
        if (e.keyCode === 13 && this.state.inputValue !== ''){
            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                list,
                inputValue: ''
            })
        }
    }
    handItemClick(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({list})
    }
    getListItem() {
         return  this.state.list.map((value, index)=> {
                    return <TodoItem 
                    content={value}
                    key={index}
                    dele={this.handItemClick}
                    index={index}                   
                     />
                })
    }
    render(){
    return (
        <Fragment>
        <label htmlFor="myInput">请输入内容</label>
            <input className='input' id="myInput" value={this.state.inputValue}
            onChange={this.handleIputChange}
            onKeyUp ={this.handleKeyUp}
            />
            <ul>
               {this.getListItem()}
            </ul>
        </Fragment>
    );
}
}

export default TodoList;
