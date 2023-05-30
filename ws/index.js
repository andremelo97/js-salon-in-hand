const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database/database');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// VARIABLES
app.set('port', 8000);

// ROUTES
app.use('/salon', require('./src/routes/salon.routes'));

app.listen(app.get('port'), () => {
    console.log(`WS listening on ${app.get('port')}`);
})