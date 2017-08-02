var data = require('../models/tempFakeData.json');
var Article = require('../models/Article.js');

exports.list_articles = function(req, res) {
  res.json(data.articles);
};

exports.create_article = function(req, res, next) {
  res.json(req.body);
};

exports.read_article = function(req, res) {
  res.json(data.articles.find( element => element.id === parseInt(req.params.articleId) ));
};

exports.update_article = function(req, res) {
  res.send("to do: update article");
};

exports.delete_article = function(req, res) {
  res.send("to do: delete article");
};
