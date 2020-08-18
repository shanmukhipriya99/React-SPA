const express = require("express");
const cors = require("cors");
require("./db/db");

const app = express();
const port = process.env.PORT || 8000;

const name = require('./routes/name');
const success = require('./routes/success');

app.use(cors());
app.use(express.json());
app.use(name);
app.use(success);

app.listen(port, () => {
    console.log("Serving on port " + port);
});