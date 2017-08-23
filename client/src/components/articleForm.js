import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FormData from 'form-data';
import { Redirect } from 'react-router-dom';

class ArticleForm extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
    this.state = {
      title: "",
      body: "",
      author: "",
      redirectArticleId: null
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let reqBody = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("/articles", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error ('Something went wrong with your fetch');
        }
      })
      .then((json) => {
        this.setState({
          redirectArticleId: json
        });
        console.log("creadted article id: ", json);
      })
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/article/${this.state.redirect}`}/>;
    } else {
      return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="article__title">Title:</Label>
            <Input
              type="text"
              name="title"
              id="article__title"
              required
              value={this.state.title}
              onChange={this.handleInputChange}
              />
          </FormGroup>
          <FormGroup row>
            <legend className="col-form-legend col-sm-12">Main Image</legend>
            <Col xs="6" sm="4">
              <FormGroup>
                <img src="http://via.placeholder.com/300x200" width="100%" className="img-fluid"/>
              </FormGroup>
            </Col>
            <Col xs="12" sm="8">
              <FormGroup>
                <Label for="image__url">Image URL:</Label>
                <Input type="url" name="image__url" id="image__url" />
                <Label for="image__title">Image Title:</Label>
                <Input type="url" name="image__title" id="image__title" />
                <Label for="image__alt">Image Alt decription:</Label>
                <Input type="url" name="image__url" id="image__alt" />
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="article__body">Body:</Label>
            <Input
              type="textarea"
              name="body"
              id="article__body"
              value={this.state.body}
              onChange={this.handleInputChange}
              />
          </FormGroup>
          <FormGroup>
              <Label for="article__author">Author:</Label>
              <Input
                type="select"
                name="author"
                id="article__author"
                value={this.state.author}
                onChange={this.handleInputChange}
                >
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Nodoe</option>
              </Input>
            </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      );
    }
  }
};

export default ArticleForm;
