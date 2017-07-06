import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
            <Card>
              <CardMedia>
                <img src={article.imageUrl} alt="" />
              </CardMedia>
              <CardTitle title={article.title} />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }

}
