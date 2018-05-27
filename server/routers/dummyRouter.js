const   express = require('express');
const dummyCtrl = require('../ctrls/dummyCtrl');

// Create a router, a router is like a local version of an express route.
// It can be 'mounted' at a specific path.  See server.js for more details.
const router = express.Router();

// GET / - Get all documents
router.get('/', (req,res) => {
	dummyCtrl.getDummies().then(r => res.json(r), e => res.status(400).json(e));
});

// GET /:id - Get one specific document
router.get('/:id', (req,res) => {
	dummyCtrl.getDummyById(req.params.id).then(r => res.json(r), e => res.status(400).json(e));
});


// POST / - Save (create or update) a document
router.post('/', (req,res) => {
	dummyCtrl.saveDummy(req.body).then(r => res.json(r), e => res.status(400).json(e));
});

// Our dummyRoute module exports just router
module.exports = router;
