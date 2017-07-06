import React, { Component } from 'react';

export class Articles extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      users: [],
      articles: []
    };
  }
  
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({users}));

    fetch("/articles")
      .then(res => res.json())
      .then(articles => this.setState({articles}));
  }
  
  render() {
    return (
      <div>
        <h2>All Articles</h2>
        {this.state.articles.map( article => {
          return (
            <div>
              <h3>{article.title}</h3>
            </div>
          );
        })}
      </div>
    );
  }

}
