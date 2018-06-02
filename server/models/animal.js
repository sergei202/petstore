const mongoose = require('mongoose');

// Create a Animal model
const Animal = mongoose.model('Animal', {
	name: String,
	type: String,		// cat, dog, etc
	adopted: Boolean
});

module.exports = Animal;
