const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const getDataRouter = require('./src/routers/getData');

app.use(bodyParser.urlencoded({ extended: false, limit: '4MB' }));
app.use(bodyParser.json({ limit: '4MB' }));

app.use('/web', express.static('static'));
app.use('/get-data', getDataRouter);

app.listen(4000, 'localhost', () => {
    console.log("Server is running on localhost:4000");
});