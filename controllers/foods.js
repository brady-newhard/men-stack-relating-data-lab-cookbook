const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// Landing Page
router.get('/users/:userId/foods', async (req, res) => {
    const user = await User.findById(req.params.userId);
    res.json(user.pantry);
});

// Index
router.get('/', (req, res) => {
    res.render('foods/index.ejs');
});

// New Item Page
router.get('/users/:userId/foods/new', (req, res) => {
    res.send('New Food');
  });

// New Item Page
router.get('/new', (req, res) => {
    res.render('foods/new.ejs', { userId: req.params.userId});
});
 

module.exports = router;
