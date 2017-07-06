import React from 'react';
import ArticleForm from './articleForm';

export class AddArticle extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Add new article</h1>
        
        <ArticleForm />
      </div>
    );
  }
}
