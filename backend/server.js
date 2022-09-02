const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database').connect();
const morgan = require('morgan');

/* Import Routes */
const studentRouter = require('./routes/student');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('common'));

/* Use Routes */
app.use('/Student',studentRouter);

app.listen(PORT, ()=>{
    console.log(`App is up and running on PORT ${PORT}`);
})
