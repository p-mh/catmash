const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');

routes(app);

app.listen(config.PORT, () =>
  console.log(`server started on port ${config.PORT}`)
);