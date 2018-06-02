const   express = require('express');
const animalCtrl = require('../ctrls/animalCtrl');

// Create a router, a router is like a local version of an express route.
// It can be 'mounted' at a specific path.  See server.js for more details.
const router = express.Router();

// GET / - Get all documents
router.get('/', (req,res) => {
	animalCtrl.getAnimals().then(r => res.json(r), e => res.status(400).json(e));
});

// GET /:id - Get one specific document
router.get('/:id', (req,res) => {
	animalCtrl.getAnimalById(req.params.id).then(r => res.json(r), e => res.status(400).json(e));
});

// POST / - Save (create or update) a document
router.post('/', (req,res) => {
	animalCtrl.saveAnimal(req.body).then(r => res.json(r), e => res.status(400).json(e));
});

// Our animalRoute module exports just router
module.exports = router;
