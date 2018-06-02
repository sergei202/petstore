const Animal = require('../models/animal');
const Customer = require('../models/customer');


// Returns a promise that resolves to an array of documents
function getAnimals() {
	return Animal.find().populate('owner').lean().exec();
}

// Returns a promise that resolves to an array of documents
function getAnimalById(id) {
	return Animal.findById(id).exec();
}


// Will create or update a animal.  Returns a promise of the saved document.
function saveAnimal(animal) {
	if(!animal._id) {				// If a new document (no _id)
		animal = new Animal(animal);
		return animal.save();
	}
	if(animal.delete) {				// If deleting a document
		return Animal.findByIdAndRemove(animal._id).exec();
	}
	return Animal.findByIdAndUpdate(animal._id, animal, {new:true});
}


module.exports = {
	getAnimals: getAnimals,
	getAnimalById: getAnimalById,
	saveAnimal: saveAnimal
};
