import React, {Component} from "react";



class TodoItem extends Component{
    constructor (props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this)
        
    }
   handleItemClick(){
       const {dele, index} =this.props
       dele(index)
       console.log(index)
       console.log('success')
       //this.props.dele(this.props.index)
   }
    render(){
        const {content} = this.props;
        //const content = this.props.content
        //ES6语法是等价的
        return (
            <li onClick={this.handleItemClick}>{content}</li>
        )
    }
}

export default TodoItem
