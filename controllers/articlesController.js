var data = require('../models/tempFakeData.json');

exports.list_articles = function(req, res) {
  res.json(data.articles);
};

exports.create_article = function(req, res) {
  res.send("to do: create article");
};

exports.read_article = function(req, res) {
//  res.json(JSON.stringify(req.params.articleId));
//  res.send(req.params.articleId); // dziala
  res.json(data.articles.find( element => element.id === parseInt(req.params.articleId) ));
};

exports.update_article = function(req, res) {
  res.send("to do: update article");
};

exports.delete_article = function(req, res) {
  res.send("to do: delete article");
};
