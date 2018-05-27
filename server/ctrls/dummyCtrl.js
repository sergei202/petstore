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
	if(!dummy._id) dummy = new Dummy(dummy);
	return Dummy.findByIdAndUpdate(dummy._id, dummy, {new:true, upsert:true});
}


module.exports = {
	getDummies: getDummies,
	getDummyById: getDummyById,
	saveDummy: saveDummy
};
