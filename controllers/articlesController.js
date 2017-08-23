var data = require('../models/tempFakeData.json');
var Article = require('../models/Article.js');

exports.list_articles = function(req, res) {
  res.json(data.articles);
};

exports.create_article = function(req, res, next) {
//  res.json(req.body);
  const article = new Article({
    title: req.body.title,
    body: req.body.body
  })
  
  article.save(function (err, article) {
    if (err) return console.error(err);
    res.json(article._id); 
  });  
};

exports.read_article = function(req, res, next) {
//  res.json(data.articles.find( element => element.id === parseInt(req.params.articleId) ));
  Article.findById(req.params.articleId)
    .then(article => {
      res.send(200, article);
      next();
    })
    .catch(err => {
      res.send(500, err)
    })
};

exports.update_article = function(req, res) {
  res.send("to do: update article");
};

exports.delete_article = function(req, res) {
  res.send("to do: delete article");
};
