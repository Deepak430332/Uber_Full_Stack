const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Create a new customer
router.post('/', async (req, res) => {
    const newCustomer = new Customer(req.body);
    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Read all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a customer
router.put('/:id', async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCustomer);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a customer
router.delete('/:id', async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json("Customer deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;