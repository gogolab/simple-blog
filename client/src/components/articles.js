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
    // fetch("/users")
    //   .then(res => res.json())
    //   .then(users => this.setState({users}));

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
        <Row style={{minHeight: "100vh"}}>
          <CardDeck>
            {this.state.articles.map( (article, index) => {
              let articleUrl = "/article/" + article.id;
              
              if(index === 0) {
                return (
                  <Col sm={12} lg={8} style={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <Card
                      inverse
                      tag={Link}
                      to={articleUrl}
                      style={{
                        marginBottom: "30px"
                      }}
                    >
                      <CardImg
                        top
                        width="100%"
                        src={article.imageUrl}
                        alt="Card image cap"
                      />
                      <CardImgOverlay style={{
                          display: "flex",
                          flexDirection: "column-reverse",
                          justifyContent: "flex-start",
                          background: "linear-gradient(to top, hsl(0, 0%, 0%), hsla(44.3, 100%, 45.1%, 0.1) 60%, hsla(44.3, 100%, 45.1%, 0.2)"
                      }}>
                        <CardTitle style={{textTransform: "uppercase"}}>
                          {article.title}
                        </CardTitle>
                        <div style={{
                          textTransform: "uppercase",
                          color: "#aaa",
                          fontSize: "0.75em"
                        }}>
                          july 6, 2017
                        </div>
                      </CardImgOverlay>
                    </Card>
                  </Col>
                );
              } else {
                return (
                  <Col sm={12} md={6} lg={4} style={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <Card
                      tag={Link}
                      to={articleUrl}
                      style={{
                        marginBottom: "30px",
                        textDecoration: "none",
                        color: "black"
                      }}
                    >
                      <CardImg
                        top
                        width="100%"
                        src={article.imageUrl}
                        alt="Card image cap"
                        style={{
                          objectFit: "cover",
                          maxHeight: "200px"
                        }}
                      />
                      <CardBlock style={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "flex-start",
                        minHeight: "150px"
                      }}>
                        <div style={{
                          textTransform: "uppercase",
                          color: "#aaa",
                          fontSize: "0.75em"
                        }}>
                          july 6, 2017
                        </div>
                        <CardTitle style={{textTransform: "uppercase"}}>
                          {article.title}
                        </CardTitle>
                      </CardBlock>
                      <CardFooter>
                        <img
                          src="http://i.imgur.com/fzwK2ap.jpg"
                          width="40px"
                          style={{borderRadius: "50%"}}
                        />
                      </CardFooter>
                    </Card>
                  </Col>
                );
              }
            })}
            
          </CardDeck>
        </Row>
        <Row>
          <Col>
            <Waypoint onEnter={this._handleWaypointEnter} >
              <div>Waypoint ToDo: prevent it from firing on pageload, before content</div>
            </Waypoint>
          </Col>
        </Row>
      </div>
    );
  }

}
