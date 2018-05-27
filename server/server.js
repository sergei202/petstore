const    express = require('express');
const   mongoose = require('mongoose');
const bodyParser = require('body-parser');
const   config = require('./config');

// Connect our database.  See config.js for the database name.
mongoose.connect('mongodb://localhost:27017/'+config.database);

// Create our app and listen()
const app = express();
app.use(bodyParser.json());			// Allows express to parse POST requests as req.body
app.listen(config.port, err => {
	console.log('Server listening at http://localhost:%s', config.port);
});

app.get('/', (req,res) => res.send('Nothing here.  Did you mean to hit the front-end at http://localhost:4200 instead?'));

// Load our routers and mount them.
// Note that we are mounting dummyRouter at /dummy.  This means that dummyRouter's / route will accessible as /api/dummy.
const dummyRouter = require('./routers/dummyRouter');
app.use('/api/dummy', dummyRouter);
