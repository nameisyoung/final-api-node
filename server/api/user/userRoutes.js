var router = require('express').Router();
var Model = require('./userModel');


// router.param('id', function(req, res) {
// 	res.send(Model.find());
// });


// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

//api/users    GET
//api/users     POST
router.route('/')
  .get(function(req, res) {
      Model.find({}, function(err, models) {
				if (err) res.send(err);

				res.json(models);
			})
  .post(function(req, res){
			var newUser = new Model(req.body);
      Model.save(function(err) {
				if (err) res.send(err);

				res.send('User created');
			}
  });


//api/users/:user_id    get
//api/users/:user_id    put
//api/users/:user_id    delete
router.route('/:user_id')
  .get(function(req, res){
    Model.findById(req.params.user_id, function(err, model){
			if (err) res.send(err);

			res.json(model);
		}
	.delete(function(req, res) {
    Model.findOneAndRemove({username: req.params.user_id}, function(err, model){
			if (err) res.send(err);

			res.send('User deleted');
		}
  .put(function(req, res) {
    Model.findOnedAndUpdate({username: req.params.user_id}, {$set: req.body}, function(err, model){
			if (err) res.send(err);

			//res.send('User updated');
			res.json(model);
		}
  });

module.exports = router;
