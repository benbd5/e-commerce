// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const bodyboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bodyboard", bodyboardSchema);