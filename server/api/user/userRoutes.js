var router = require('express').Router();
var Model = require('./userModel');


router.param('id', function(req, res) {
	res.send(Model.find());
});


// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

//api/users    GET
//api/users     POST
router.route('/')
  .get(function(req, res){
    throw new Error();
    //console.log('Hey from user!!');
    //res.send({ok: true});
      Model.find(function(err, models){
	  if(err){
	      res.send(err);
	  }
	  res.json(models);
      });
   })
  .post(function(req, res){
      Model.create({
	  username: req.body;
      });
  });


//api/users/:user_id    get
//api/users/:user_id    put
//api/users/:user_id    delete
router.route('/:user_id')
  .get(function(req, res){
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.find({username:user_id});
  })
  .delete(function(req, res) {
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.remove({username:user_id});
  })
  .put(function(req, res) {
    Model.find(function(err, models){
	if(err){
	    res.send(err);
	}
	res.json(models.findOneAndUpdate({username:user_id}, update, option, callback);)
  });


module.exports = router;


