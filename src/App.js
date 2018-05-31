import React, { Component } from 'react';
import './App.css';

const GH_URL = "https://api.github.com/users/mdshepard"

class App extends Component {
  state = {
    user: {},
    active: false,
  }

  handleClick = () => {
    fetch(GH_URL)
    .then(response => response.json())
    //here we apply the data from the fetch to the user in the state object, and we set the value of active to the opposite of it's current value.
    .then(data => {this.setState({user: data, active: !this.state.active})})
  }
  
  render() {
    return (
    <div>
      <button onClick = {this.handleClick}>
        this is a button
      </button>
      { this.state.active ?
      <React.Fragment>
      <div>
        {this.state.user.login}
      </div>
      <div>
      <img src={this.state.user.avatar_url}/>
      </div>
      <div>
        {"followers:" + this.state.user.followers + " ...womp womp"}
      </div>
      <div>
        {"public repos:" + this.state.user.public_repos}
      </div>
      </React.Fragment>
      : null
      }
    </div>
    );
  }
}

export default App;
