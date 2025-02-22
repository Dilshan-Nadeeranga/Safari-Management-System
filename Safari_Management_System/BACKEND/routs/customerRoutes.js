const express = require('express');
//const router = require("express").Router();
let Booking = require("../models/Customer");
const {
    registerCustomer,
    loginCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} = require('../controllers/customerController');

const router = express.Router();

// Register a new customer
router.post('/register', registerCustomer);

// Login customer
router.post('/login', loginCustomer);

// Get customer by ID
router.get('/:id', getCustomerById);

// Update customer details
router.put('/:id', updateCustomer);

// Delete customer
router.delete('/:id', deleteCustomer);

module.exports = router;
