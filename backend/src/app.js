const express = require('express');
const healthRoutes = require('./routes/health.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();

app.use(express.json());

app.use('/health', healthRoutes);
app.use('/orders', orderRoutes);

module.exports = app;



