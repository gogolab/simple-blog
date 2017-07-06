import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBlock } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

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
        <Row>
          <CardDeck>
            {this.state.articles.map( (article, index) => {
              if(index === 0) {
                return (
                  <Col sm={8} style={{display: "flex", "flex-direction": "column"}}>
                    <Card style={{"margin-bottom": "1em"}}>
                      <CardImg top width="100%" src={article.imageUrl} style={{"object-fit": "cover", "max-height": "200px"}}  alt="Card image cap" />
                      <CardBlock>
                        <CardTitle style={{"text-transform": "uppercase"}}>{article.title}</CardTitle>
                        <Button>Button</Button>
                      </CardBlock>
                    </Card>
                  </Col>
                );
              } else {
                return (
                  <Col sm={4} style={{display: "flex", "flex-direction": "column"}}>
                    <Card style={{"margin-bottom": "1em"}}>
                      <CardImg top width="100%" src={article.imageUrl} style={{"object-fit": "cover", "max-height": "200px"}}  alt="Card image cap" />
                      <CardBlock>
                        <CardTitle style={{"text-transform": "uppercase"}}>{article.title}</CardTitle>
                        <Button>Button</Button>
                      </CardBlock>
                    </Card>
                  </Col>
                );
              }
            })}
          </CardDeck>
        </Row>
      </div>
    );
  }

}
