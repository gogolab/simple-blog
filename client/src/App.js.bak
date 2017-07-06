import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      article: {}
    };
  };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({users}));

    fetch("/articles/34234")
      .then(res => res.json())
      .then(article => this.setState({article}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Users:</h2>
            {this.state.users.map( user => {
                return <div key={user.id}>{user.username}</div>;
              })
            }
        <h2>Article</h2>
            <h3>{this.state.article.title}</h3>
            <div>{this.state.article.body}</div>
      </div>
    );
  }
}

export default App;
