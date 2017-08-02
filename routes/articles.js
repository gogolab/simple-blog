var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var articles = require('../controllers/articlesController');

/* GET users listing. */
router.get('/', articles.list_articles);
router.post('/', articles.create_article);

router.get('/:articleId', articles.read_article);
router.put('/:articleId', articles.update_article);
router.delete('/:articleId', articles.delete_article);

module.exports = router;
