const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.use('/', express.static(`${__dirname}/../client/build/`));

app.listen(config.PORT, () =>
  console.log(`server started on port ${config.PORT}`)
);
