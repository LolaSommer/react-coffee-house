import app from './app.js';
console.log('SERVER START:', import.meta.url);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

