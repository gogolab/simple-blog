import React, { Component } from 'react';

export class Article extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      users: [],
      article: {}
    };
  }
  
  componentDidMount() {
    const articleId = this.props.match.params.id;

    fetch(`/articles/${articleId}`)
      .then(res => res.json())
      .then(article => this.setState({article}));

    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({users}));
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <div className="body">{this.state.article.body}</div>
        <h4>params:</h4>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }

}
