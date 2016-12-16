var router = require('express').Router();
var Model = require('./categoryModel');


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
	  categories: req.body
      });
  });

router.route('/:category_id')
  .get(function(req, res){
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.find({post:category_id});
  })
  .delete(function(req, res) {
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.remove({category:category_id});
  })
  .put(function(req, res) {
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.findOneAndUpdate({category:category_id}, update, option, callback);)
  });

module.exports = router;

module.exports = router;
