var data = require('../models/tempFakeData.json');

exports.list_articles = function(req, res) {
  res.json(data.articles);
};

exports.create_article = function(req, res) {
  res.send("to do: create article");
};

exports.read_article = function(req, res) {
  res.json({title: "Very first title", body: "Lorem ipsum dolor sit amet"});
};

exports.update_article = function(req, res) {
  res.send("to do: update article");
};

exports.delete_article = function(req, res) {
  res.send("to do: delete article");
};
