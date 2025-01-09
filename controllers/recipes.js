const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

// Fetch Data
router.get('/', async (req, res) => {
  const user = await User.findById(req.session.user._id);
  res.render('recipes/index.ejs');
});

// New Item Page
router.get('/new', (req, res) => {
  res.render('recipes/new.ejs', { userId: req.params.userId});
});

// Post & Create a new food item
router.post('/', async (req, res) => {
  try {
      const newRecipe = new Recipe(req.body)
      newRecipe = req.session.user._id;
      await newRecipe.save();
      res.redirect(`/users/${req.session.user._id}/recipes`);
  } catch (error) {
      console.log(error);
      res.redirect('/');
  }
});
module.exports = router;


