import express from 'express';
console.log('ORDER ROUTES FILE:', import.meta.url);


import { createOrderController } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', createOrderController);

export default router;




