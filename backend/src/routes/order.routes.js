import express from 'express';
import { authMiddleware } from '../middlewares/auth.milddleware.js'
import { createOrderController } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', authMiddleware, createOrderController);

export default router;





