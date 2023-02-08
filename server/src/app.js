const express = require('express');
const cors = require('cors');
const app = express();

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "server/src/.env" });
}

// Settings

app.set('port', process.env.PORT || 8080);

// Middleware

app.use(cors());
app.use(express.json());

// Routes

app.use('/api/products', require('./routes/products'));


module.exports = app;
