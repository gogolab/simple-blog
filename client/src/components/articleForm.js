import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ArticleForm = () => (
  <div>
    <Form>
      <FormGroup row>
        <Label for="article__title"  sm={2}>Title</Label>
        <Col sm={10}>
          <Input type="text" name="title" id="article__title" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup>
          <Label for="article__body">Body</Label>
          <Input type="textarea" name="body" id="article__body" />
      </FormGroup>
    </Form>
  </div>
);

export default ArticleForm;
