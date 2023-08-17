import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc    Register a new post
// @route   POST /api/posts
// @access  Public
const createPost = asyncHandler(async (req, res) => {
    const { author, content, important } = req.body;
  

    const post = await Post.create({
        author,
        content,
        important,
    });
  
    if (post) {  
      res.status(201).json({
        _id: post._id,
        author: post.author,
        content: post.content,
      });
    } else {
      res.status(400);
      throw new Error('Invalid post data');
    }
  });

  // @desc    Get post 
// @route   GET /api/posts/
// @access  Private
const getPostProfile = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.query._id);
    if (post) {
      res.json({
        _id: post._id,
        author: post.author,
        content: post.content,
      });
    } else {
      res.status(404);
      throw new Error('Post not found');
    }
  });

// @desc    Delete post 
// @route   Delete /api/posts/
// @access  Private
const deletePostProfile = asyncHandler(async (req, res) => {
    const post = await Post.findByIdAndDelete(req.query._id);
    if (post) {
      res.json({
        _id: post._id,
        author: post.author,
        content: post.content,
      });
    } else {
      res.status(404);
      throw new Error('Post not found');
    }
  });

// @desc    Update post profile
// @route   PUT /api/posts/profile
// @access  Private
const updatePostProfile = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.body._id);
  
    if (post) {
      post.author = req.body.author || post.author;
      post.content = req.body.content || post.content;

  
      const updatedPost = await post.save();
  
      res.json({
        _id: updatedPost._id,
        author: updatedPost.author,
        content: updatedPost.content,
      });
    } else {
      res.status(404);
      throw new Error('Post not found');
    }
  });

export {
    createPost,
    getPostProfile,
    updatePostProfile,
    deletePostProfile  
  };
  