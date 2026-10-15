import { Router } from "express";
import {createPost, updatePost, getPost, deletePost} from '../controllers/post.controller.js';

const router = Router();

router.route('/create').post(createPost);
router.route('/getPost').get(getPost);
router.route('/update/:id').patch(updatePost);
router.route('/delete/:id').delete(deletePost);

export default router;