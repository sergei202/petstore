const Dummy = require('../models/dummy');

// Returns a promise that resolves to an array of documents
function getDummies() {
	return Dummy.find().exec();
}

// Returns a promise that resolves to an array of documents
function getDummyById(id) {
	return Dummy.findById(id).exec();
}


// Will create or update a dummy.  Returns a promise of the saved document.
function saveDummy(dummy) {
	if(!dummy._id) {				// If a new document (no _id)
		dummy = new Dummy(dummy);
		return dummy.save();
	}
	if(dummy.delete) {				// If deleting a document
		return Dummy.findByIdAndRemove(dummy._id).exec();
	}
	return Dummy.findByIdAndUpdate(dummy._id, dummy, {new:true});
}


module.exports = {
	getDummies: getDummies,
	getDummyById: getDummyById,
	saveDummy: saveDummy
};
