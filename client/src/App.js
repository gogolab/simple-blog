import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { Articles } from './components/articles';
import { Article } from './components/article';
import { AddArticle } from './components/addArticle';
import { PageNotFound } from './components/pageNotFound';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.loadData = this.loadData.bind(this);

    this.state = {
      users: [],
      article: {},
      isOpen: false
    };
  };
  
  loadData() {
    console.log('loadData test');
  }

  componentDidMount() {
    this.loadData;
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
      
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/">Simple Blog</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/add-new-article">Add Article</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container style={{paddingTop: "1.5em"}}>
          <Row>
            <Col>
              <div className="box">
                <Switch>
                  <Route exact path="/" component={Articles} />
                  <Route path="/articles" component={Articles} />
                  <Route path="/article/:id" component={Article} />
                  <Route path="/add-new-article" component={AddArticle} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
