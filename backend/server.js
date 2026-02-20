require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/', routes);

// listen
const PORT = Number(process.env.PORT) || 80;
app.listen(PORT, () => {
    console.log('listening on: ', PORT);
});