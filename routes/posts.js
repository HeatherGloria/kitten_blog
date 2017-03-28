var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('posts')
    .then((data) => {
      res.render('posts', {'data': data});
    })
});

router.get('/new', function(req, res, next){
  res.render('newpost');
})
router.get('/:id', function(req, res, next){
  knex('posts')
    .innerJoin('users', 'users.id', 'posts.user_id')
    .where('posts.id', req.params.id)
    .then((data) => {
      res.render('posts', {'data': data});
    })
})

router.post('/', function(req, res, next){
  knex('posts')
    .insert({
      'user_id': 1,
      'title': req.body.title,
      'body': req.body.body
    })
    .then(function(data) {
      res.redirect('/posts');
    })
})


module.exports = router;
