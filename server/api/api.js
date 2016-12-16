var router = require('express').Router();

// api router will mount other routers
// for all our resources

//This is the initial API Endpoint 
router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});
router.use('/users', require('./user/userRoutes'));

router.use(function(err, req, res, next) {
  if (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
});
 
module.exports = router;
