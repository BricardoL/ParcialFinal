var express = require('express');
var router = express.Router();
const Post = require('../models/post');

/* GET home page. */
router.get('/',async (req, res) =>{
  const posts = await Post.find();
  res.render('index', {posts});
});



module.exports = router;