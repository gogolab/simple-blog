import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { Articles } from './components/articles';
import { Article } from './components/article';
import { AddArticle } from './components/addArticle';
import { PageNotFound } from './components/pageNotFound';

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
        <div className="wrapper">

              <div className="row center-xs">
                <div className="col-xs-12">
                  <div className="box">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/articles">Articles</Link></li>
                      <li><Link to="/add-new-article">Add Article</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
                <hr/>
              <div className="row">
                <div className="col-xs-12">
                  <div className="box">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/articles" component={Articles} />
                      <Route path="/article/:id" component={Article} />
                      <Route path="/add-new-article" component={AddArticle} />
                      <Route component={PageNotFound} />
                    </Switch>
                  </div>
                </div>
              </div>

        </div>
      </div>
    );
  }
}

export default App;
