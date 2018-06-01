import React, { Component } from 'react';
import './index.css';

const GH_URL = "https://api.github.com/users/mdshepard"

class App extends Component {
  state = {
    user: {},
    active: false,
  }

  handleClick = () => {
    fetch(GH_URL)
    .then(response => response.json())
    .then(data => {this.setState({user: data, active: !this.state.active})})
  }
  
  render() {
    return (
    <div id="mainContainer">
      <button id="bigOlPrettyButton" class="btn" onClick = {this.handleClick}>
        Click Me!
      </button>
      { this.state.active ?
      <React.Fragment>
      <div id="handle">
        {this.state.user.login}
      </div>
      <div id="dangOlAvatarMan">
      <img src={this.state.user.avatar_url}/>
      </div>
        <div>
          <div id="followers">
          {"followers:" + this.state.user.followers + " ...womp womp"}
          </div>
          <div id="publicRepos">
          {"public repos:" + this.state.user.public_repos}
          </div>
        </div>
      </React.Fragment>
      : null
      }
    </div>
    );
  }
}

export default App;
