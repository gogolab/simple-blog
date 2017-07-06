var data = require('../models/tempFakeData.json');

exports.list_users = function(req, res) {
  res.json(data.users);
};

exports.create_user = function(req, res) {
  res.send("to do: create user");
};

exports.read_user = function(req, res) {
  res.json({title: "Very first user", body: "Lorem ipsum dolor sit amet"});
};

exports.update_user = function(req, res) {
  res.send("to do: update user");
};

exports.delete_user = function(req, res) {
  res.send("to do: delete user");
};
