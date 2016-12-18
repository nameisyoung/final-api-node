var router = require('express').Router();
var Model = require('./categoryModel');

router.param('id', function(req, res) {
	res.send(Model.find());
});

router.route('/')
  .get(function(req, res) {
      Model.find({}, function(err, models) {
				if (err) res.send(err);

				res.json(models);
			})
  .post(function(req, res){
			var newCategory = new Model(req.body);
      newUser.save(function(err) {
				if (err) res.send(err);

				res.send('Category created');
			}
  });

router.route('/:category_id')
.get(function(req, res){
	Model.find({name: req.params.category_id}, function(err, model){
		if (err) res.send(err);

		res.json(model);
	}
.delete(function(req, res) {
	Model.findOneAndRemove({name: req.params.category_id}, function(err, model){
		if (err) res.send(err);

		res.send('Category deleted');
	}
.put(function(req, res) {
	Model.findOnedAndUpdate({name: req.params.category_id}, {$set: req.body}, function(err, model){
		if (err) res.send(err);

		res.json(model);
	}
});

module.exports = router;
