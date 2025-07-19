const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use process.env.PORT for Azure

app.get('/', (req, res) => {
  res.send('<h1>Hello from Azure Node.js App!</h1><p>This is a PaaS deployment via CLI.</p><p>Current Time: ' + new Date().toLocaleString() + '</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});