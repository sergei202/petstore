const Customer = require('../models/customer');

// Returns a promise that resolves to an array of documents
function getCustomers() {
	return Customer.find().exec();
}

// Returns a promise that resolves to an array of documents
function getCustomerById(id) {
	return Customer.findById(id).exec();
}


// Will create or update a customer.  Returns a promise of the saved document.
function saveCustomer(customer) {
	if(!customer._id) {				// If a new document (no _id)
		customer = new Customer(customer);
		return customer.save();
	}
	if(customer.delete) {				// If deleting a document
		return Customer.findByIdAndRemove(customer._id).exec();
	}
	return Customer.findByIdAndUpdate(customer._id, customer, {new:true});
}


module.exports = {
	getCustomers: getCustomers,
	getCustomerById: getCustomerById,
	saveCustomer: saveCustomer
};
