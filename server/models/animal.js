const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

// Create a Animal model
const Animal = mongoose.model('Animal', {
	name: String,
	type: String,		// cat, dog, etc
	adopted: Boolean,

	owner: {type:ObjectId, ref:'Customer'}
});

module.exports = Animal;
