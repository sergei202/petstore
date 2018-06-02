const   express = require('express');
const customerCtrl = require('../ctrls/customerCtrl');

// Create a router, a router is like a local version of an express route.
// It can be 'mounted' at a specific path.  See server.js for more details.
const router = express.Router();

// GET / - Get all documents
router.get('/', (req,res) => {
	customerCtrl.getCustomers().then(r => res.json(r), e => res.status(400).json(e));
});

// GET /:id - Get one specific document
router.get('/:id', (req,res) => {
	customerCtrl.getCustomerById(req.params.id).then(r => res.json(r), e => res.status(400).json(e));
});

// POST / - Save (create or update) a document
router.post('/', (req,res) => {
	customerCtrl.saveCustomer(req.body).then(r => res.json(r), e => res.status(400).json(e));
});

// Our customerRoute module exports just router
module.exports = router;
