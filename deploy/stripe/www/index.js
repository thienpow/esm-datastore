const winston = require("winston");
const express = require("express");
const app = express();
const process = require('process');

// require("./startup/logging")();
require("./startup/routes")(app);
const port = process.env.PORT || 4242;
app.listen(port, () => winston.info(`Listening on port ${port}`));
// app.listen(port, () => console.log(`Listening on port ${port}`));