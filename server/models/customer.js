const mongoose = require('mongoose');

// Create a Customer model
const Customer = mongoose.model('Customer', {
	name: String,
	phone: String,
	email: String
});

module.exports = Customer;
