const express = require('express');
const router = express.Router();
const borrower = require('../models/borrower_model');

// GET all borrowers
router.get('/',
    function (request, response) {
        borrower.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        });
    }
);

// GET one borrower by id
router.get('/:id',
    function (request, response) {
        borrower.getOne(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    }
);

// POST new borrower
router.post('/',
    function (request, response) {
        borrower.add(request.body, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    }
);

// DELETE borrower
router.delete('/:id',
    function (request, response) {
        borrower.delete(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    }
);

// UPDATE borrower
router.put('/:id',
    function (request, response) {
        borrower.update(request.params.id, request.body, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    }
);

module.exports = router;
