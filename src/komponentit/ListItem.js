//Import required modules
import React, {Component} from "react";
import {connect} from "react-redux";
import {completeToDo} from "../toiminnot"

class ListItem extends Component {
    //Set completeClick to equal completeToDo's module
    completeClick = completeTodoId => {
        const {completeToDo} =  this.props;
        completeToDo(completeTodoId);
    };
    //Renders inserted TodoItems and button for deleting items
    render() {
        const{todoId, todo} = this.props;
        return (
            <div key="toDoName" id="ToDoItem">
                <h4 id="h4">
                    {todo.title}
                    <span onClick={() => this.completeClick(todoId)} id="button">
                    <i id="buttonI">Done</i>
                    </span>
                </h4>
            </div> 
        );
    }
}
//Export module
export default connect(null, {completeToDo})(ListItem);