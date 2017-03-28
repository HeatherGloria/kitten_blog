var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  var username = req.body.username;
  knex('users')
    .where('username', username)
    .then((data) => {
      if(data.length === 0){
        knex('users')
          .insert({
            'username': username,
            'name': username,
            'email': `${username}@awesome.com`,
            'profile_pic': 'https://media.giphy.com/media/2xgzOPvrWW7hm/giphy.gif'
          })
          .returning('*')
          .then((newUser) => {
            res.cookie('userID', newUser[0].id);
            res.redirect(`/users/${newUser[0].id}`)
          })
      }else{
        res.cookie('userID', data[0].id);
        res.render('index');
      }
      // console.log(data);
      // res.end();
    })
  // res.end();
})

module.exports = router;
