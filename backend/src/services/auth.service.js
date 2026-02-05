import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'dev-secret';

export function login(phone) {
  const userId = Date.now().toString();

  const token = jwt.sign(
    { userId },
    SECRET_KEY
  );

  return {
    token,
    user: {
      id: userId,
    },
  };
}
