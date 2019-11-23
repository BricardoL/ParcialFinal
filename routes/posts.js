const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try{
    const posts = await Post.find();
    res.json(posts);
    }catch(err){
       res.json({message:err});
    }});

router.post('/', async (req,res)=> {
    const post = new Post({
        nombre: req.body.nombre,
        actor: req.body.actor,
        poder: req.body.poder,
        cantidaddepelis:req.body.cantidaddepelis,
        genero: req.body.genero
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
}catch(err){
    res.json({message: err});
}
});
 ////

 router.get('/:postId', async (req,res)=>{
     try{
     const post= await Post.findById(req.params.postId);
     res.json(post);
     }catch(err){
         res.json({message: err});
     }
 });

//delete
router.delete('/:postId', async (req,res)=>{
    try{
    const removedPost= await Post.remove({_id: req.params.postId});
    res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

//update
router.patch('postId', async (req,res)=>{
    try{
    const updatedPost= await Post.updateOne({_id: req.params.postId},
         {$set: {nombre: req.body.nombre}});
         res.json(UpdatedPost);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;