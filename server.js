const express = require('express');

const app = express();

const project = require('./app');

const port = process.env.PORT || 3000;

app.use(project);

app.listen(port, (req, res) => {
    console.log("Project running on port " + port);
});