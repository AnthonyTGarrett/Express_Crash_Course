// const express = require('express');
import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController.js';
const router = express.Router();

// Get all posts
router.get('/', getPosts);

// Get a single post
// Only passing next because of the error middleware
router.get('/:id', getPost);

// Create a new Post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

// module.exports = router;
export default router;
