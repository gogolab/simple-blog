import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ArticleForm = () => (
  <div>
    <Form>
      <FormGroup>
        <Label for="article__title">Title:</Label>
        <Input type="text" name="title" id="article__title" required />
      </FormGroup>
      <FormGroup>
        <Label for="article__body">Body:</Label>
        <Input type="textarea" name="body" id="article__body" />
      </FormGroup>
      <FormGroup>
        <Label for="image__url">Image URL:</Label>
        <Input type="url" name="url" id="image__url" />
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
