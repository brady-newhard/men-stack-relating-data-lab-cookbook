const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// Fetch Data
router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        res.render('foods/index.ejs', { pantry: user.pantry });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});
  
// New Item Page
router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

// Post & Create a new food item
router.post('/', async (req, res) => {
    const user = await User.findById(req.session.user._id);
    user.pantry.push(req.body);
    await user.save();
    res.redirect(`/users/${req.session.user._id}/foods`);
});
  
// Edit Item Page
router.get('/:itemId/edit', async (req, res) => { 
    const user = await User.findById(req.session.user._id);
    const food = user.pantry.id(req.params.itemId);
    res.render('foods/edit.ejs', { food });
});
  
// Update
router.put('/:itemId', async (req, res) => {
    const user = await User.findById(req.session.user._id);
    const food = user.pantry.id(req.params.itemId);
    food.set(req.body);
    await user.save();
    res.redirect(`/users/${req.session.user._id}/foods`);
});
  
// Delete
router.delete('/:itemId', async (req, res) => {
    const user = await User.findById(req.session.user._id);
    user.pantry = user.pantry.filter((item) => item._id.toString() !== req.params.itemId);
    await user.save();
    res.redirect(`/users/${req.session.user._id}/foods`);
});
  
module.exports = router;
