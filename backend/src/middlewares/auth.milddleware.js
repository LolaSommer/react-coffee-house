import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'dev-secret';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: 'UNAUTHORIZED',
    });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      error: 'UNAUTHORIZED',
    });
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);

    req.user = {
      id: payload.userId,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      error: 'INVALID_TOKEN',
    });
  }
}
