const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home</h1><p>Welcome to MyApp</p>');
});

app.get('/app1', (req, res) => {
  res.send('<h1>App1</h1><p>App1 response</p>');
});

app.get('/app2', (req, res) => {
  res.send('<h1>App2</h1><p>App2 response</p>');
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
