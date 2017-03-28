var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next){
  knex('users')
    .where('id', req.params.id)
    .then((data) => {
      res.render('users', {'username': data[0].username, 'profile_pic': data[0].profile_pic});
    })
})

module.exports = router;
