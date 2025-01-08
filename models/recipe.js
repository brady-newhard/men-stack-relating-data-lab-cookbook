const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true,
    },
    instructions: {
        type: String,
        required: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', 
    },
    ingredients: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ingredient',
        }
      ],
  });

const ingredientSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Recipe, Ingredient;