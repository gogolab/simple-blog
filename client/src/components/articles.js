import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBlock, CardImgOverlay, CardFooter } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';

export class Articles extends Component {
  constructor(props) {
    super(props)
    
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    
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
  
  _handleWaypointEnter() {
    console.log("entered waypoint - load more content");
  }
  
  render() {
    return (
      <div>
        <Row>
          <CardDeck>
            {this.state.articles.map( (article, index) => {
              let articleUrl = "/article/" + article.id;
              
              if(index === 0) {
                return (
                  <Col sm={12} lg={8} style={{display: "flex", "flex-direction": "column"}}>
                    <Card inverse tag={Link} to={articleUrl} style={{"margin-bottom": "30px"}}>
                      <CardImg top width="100%" src={article.imageUrl} style={{}}  alt="Card image cap" />
                      <CardImgOverlay style={{display: "flex", "flex-direction": "column-reverse", "justify-content": "flex-start", background: "linear-gradient(to top, hsl(0, 0%, 0%), hsla(44.3, 100%, 45.1%, 0.1) 60%, hsla(44.3, 100%, 45.1%, 0.2)"}}>
                        <CardTitle style={{"text-transform": "uppercase"}}>{article.title}</CardTitle>
                        <div style={{"text-transform": "uppercase", color: "#aaa", "font-size": "0.75em"}}>july 6, 2017</div>
                      </CardImgOverlay>
                    </Card>
                  </Col>
                );
              } else {
                return (
                  <Col sm={12} md={6} lg={4} style={{display: "flex", "flex-direction": "column"}}>
                    <Card tag={Link} to={articleUrl} style={{"margin-bottom": "30px", "text-decoration": "none", color: "black"}}>
                      <CardImg top width="100%" src={article.imageUrl} style={{"object-fit": "cover", "max-height": "200px"}}  alt="Card image cap" />
                      <CardBlock style={{display: "flex", "flex-flow": "column nowrap", "justify-content": "flex-start", "min-height": "150px"}}>
                        <div style={{"text-transform": "uppercase", color: "#aaa", "font-size": "0.75em"}}>july 6, 2017</div>
                        <CardTitle style={{"text-transform": "uppercase"}}>{article.title}</CardTitle>
                      </CardBlock>
                      <CardFooter>
                        <img src="http://i.imgur.com/fzwK2ap.jpg" width="40px" style={{"border-radius": "50%"}} />
                      </CardFooter>
                    </Card>
                  </Col>
                );
              }
            })}
            <Waypoint onEnter={this._handleWaypointEnter} >
              <div>Waypoint</div>
            </Waypoint>
          </CardDeck>
        </Row>
      </div>
    );
  }

}
