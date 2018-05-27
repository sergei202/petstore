const mongoose = require('mongoose');

// Create a Dummy model
const Dummy = mongoose.model('Dummy', {
	name: String,
	flag: Boolean,
	amount: Number
});

module.exports = Dummy;
