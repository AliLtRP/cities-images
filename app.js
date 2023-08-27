const express = require('express');
const cors = require('cors');
const router = require('./route/route');
require('dotenv').config();
const port = process.env.port;
const app = express();





app.use(cors());
app.use(router)


app.listen(port, ()=> console.log(`app is working on port ${port}`));