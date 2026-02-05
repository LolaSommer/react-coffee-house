import express from 'express';
import { createAuthController } from "../controllers/auth.controller.js";
const routerAuth = express.Router();
routerAuth.post('/login',createAuthController);
export default routerAuth;