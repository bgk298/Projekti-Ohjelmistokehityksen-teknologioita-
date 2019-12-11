//Import required modules
import React, {Component} from "react";
import {connect} from "react-redux";
import _ from "lodash";
import * as actions from "../toiminnot";
import ListItem from "./ListItem.js";
import "./tyyli.css";

class List extends Component {
    state = {
      showForm: false,
      formValue: ""
    };
  
    inputChange = event => {
      this.setState({formValue: event.target.value});
    };
  
    formSubmit = event => {
      const {formValue} = this.state;
      const {addToDo} = this.props;
      event.preventDefault();
      addToDo({title: formValue});
      this.setState({formValue: ""});
    };
    //Renders the form for submiting new todoitems
    renderForm = () => {
      const {showForm, formValue} = this.state;
      //If button showform is pressed. It returns the form
      if (showForm) {
        return (
          <div id="todo_add_form">
            <form onSubmit={this.formSubmit}>
              <div id="input_field">
              <label>Syötä tehtävä:
                <input value={formValue} onChange={this.inputChange} id="toDoNext" type="text" />
              </label>
              </div>
            </form>
          </div>
        );
      }
    };
    //Render's ToDolist items"
    renderToDo() {
      const {data} = this.props;
      const toDos = _.map(data, (value, key) => {
        return <ListItem key={key} todoId={key} todo={value} />;
      });
      //If there are no items it returns the text "You have no more things ToDo!
      if (!_.isEmpty(toDos)) {
        return toDos;
      }
      return (
        <div id="ToDos">
          <h4>You have no more things ToDo!</h4>
        </div>
      );
    }
    componentWillMount() {
      this.props.fetchToDos();
    }
    //Render's ToDoList items to html page.
    render() {
      const {showForm} = this.state;
      //Return's div's renderForm and renderToDo function's and a button +/- to open the form
      return (
        <div className="to_do_list_container">
          <div id="row">
            {this.renderForm()}
            {this.renderToDo()}
          </div>
          <div id="action_btn">
            <button 
              onClick={() => this.setState({showForm: !showForm})}
              id="btn"
            >
            {showForm ? (
              <i className="lisaaicon">-</i>
            ) : (
              <i className="lisaaicon">+</i>
            )}
            </button>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = ({data}) => {
    return {
      data
    }
  }
  //Exports redux connect module
  export default connect(mapStateToProps, actions)(List);