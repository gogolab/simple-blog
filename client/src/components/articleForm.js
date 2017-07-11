import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ArticleForm = () => (
  <div>
    <Form>
      <FormGroup>
        <Label for="article__title">Title:</Label>
        <Input type="text" name="title" id="article__title" required />
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
        <Input type="textarea" name="body" id="article__body" />
      </FormGroup>
      <FormGroup>
          <Label for="article__author">Author:</Label>
          <Input type="select" name="author" id="article__author">
            <option>John Doe</option>
            <option>Jane Nodoe</option>
          </Input>
        </FormGroup>
      <Button>Submit</Button>
    </Form>
  </div>
);

export default ArticleForm;
