import express from 'express';
import {
  createPost,
  deletePostProfile,
  getPostProfile,
  updatePostProfile
} from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPost);
/*router.post('/auth', authPost);
router.post('/logout', logoutPost);*/
router.get('/',getPostProfile)
    .put('/',updatePostProfile)
    .delete('/' , deletePostProfile);

export default router;
