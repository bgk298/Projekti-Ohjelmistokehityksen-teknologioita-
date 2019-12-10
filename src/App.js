import React, {Component} from 'react';
import './App.css';
import List from "./komponentit/List.js";

//Constant Welcome returns the welcome div to html
const Welcome = ({
  user,
  onSignOut
}) => {
  // This is a dumb "stateless" component
  return ( <div> Welcome <strong>
    {user.username}</strong>! <a href="javascript:;" onClick={onSignOut}>Sign out</a><App/></div>)}

class LoginForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  //Render login form to html
  render() {
    return ( < form onSubmit = {
        this.handleSignIn.bind(this)
      } id="Signinform">
      <h3 id="signin"> Sign in </h3>
      <input type="text" ref="username" placeholder="enter you username"/>
      <input type = "password" ref = "password" placeholder = "enter password"/>
      <input type = "submit" value = "Login"/>
      </form>
    )
  }
}

//Class Login with a constructor
class Login extends React.Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // SignIn function (That is has username and password passed in)
  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  //SignOut function
  signOut() {
    // clear out user from state
    this.setState({
      user: null
    })
  }

  render() {
    // Return div's & h1 to html
    return (
    <div id="to_do_list_container">
        <h1 id="welcome"> Todolist </h1> {(this.state.user) ? <Welcome user = {this.state.user} onSignOut = {this.signOut.bind(this)}/> : <LoginForm onSignIn={this.signIn.bind(this)}/>}
    </div>
  )
}
}
//Export module login
export default Login;

//Export class App and returns List element
export class App extends Component {
  render() {
    return (
      <List/>
    );
  }
}