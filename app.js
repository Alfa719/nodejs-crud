const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/user');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route Prefix
app.use('/users', usersRouter);

app.listen(3000, () => console.log(`Server running at port 3000`));