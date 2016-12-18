var router = require('express').Router();
var Model = require('./postModel');


// setup boilerplate route jsut to satisfy a request
// for building

// router.param('id', function(req, res) {
// 	res.send(Model.find());
// });

router.route('/')
  .get(function(req, res) {
      Model.find({})
					 .population({
						 path: 'categories',
						 model: 'category',
						 select: 'name'
					 })
					 .population('author')
					 .exec(function (err, models) {
						 if (err) res.send(err);

						 res.json(models);
					 })
	})
  .post(function(req, res){
			var newPost = new Model(req.body);
      newPost.save(function(err) {
				if (err) res.send(err);

				res.send('Post created');
			}
  });

router.route('/:post_id')
.get(function(req, res){
	Model.findById(req.params.post_id)
		.population({
			path: 'categories',
			model: 'category',
			select: 'name'
		})
		.population('author')
		.exec(function (err, models) {
			if (err) res.send(err);

			res.json(models);
		})
})
.delete(function(req, res) {
	Model.findByIdAndRemove({_id: req.params.post_id}, function(err, model){
		if (err) res.send(err);

		res.send('Post deleted');
	}
.put(function(req, res) {
	Model.findOnedAndUpdate({_id: req.params.user_id}, {$set: req.body}, function(err, model){
		if (err) res.send(err);

		res.json(model);
	}
});

module.exports = router;
