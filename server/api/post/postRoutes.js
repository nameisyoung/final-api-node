var router = require('express').Router();
var Model = require('./postModel');


// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    throw new Error();
      Model.find(function(err, models){
	  if(err){
	      res.send(err);
	  }
	  res.json(models);
      });
   })
  .post(function(req, res){
      Model.create({
	  title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    
      });
  });

router.route('/:post_id')
  .get(function(req, res){
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.find({post:post_id});
  })
  .delete(function(req, res) {
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.remove({post:post_id});
  })
  .put(function(req, res) {
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.findOneAndUpdate({post:post_id}, update, option, callback);)
  });

module.exports = router;
