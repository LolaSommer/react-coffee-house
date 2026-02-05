import express from 'express';
import healthRoutes from './routes/health.routes.js';
import orderRoutes from './routes/order.routes.js';
import routerAuth from './routes/auth.routes.js';
import cors from 'cors';
const app = express();
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



app.use(express.json());

app.use(healthRoutes);
app.use('/orders', orderRoutes);
app.use('/auth', routerAuth);


export default app;




