import express from 'express';
import {
  getPost, 
  deletePost,
  editPost,
  getPosts,
  addPost
} from '../controllers/api-post-controller.js';

const router = express.Router();

router.get('/api/posts', getPosts);
router.post('/api/post', addPost);
router.get('/api/post/:id', getPost);
router.delete('/api/post/:id', deletePost);
router.put('/api/post/:id', editPost);

export default router;