const mongoose = require("mongoose");
const { Schema } = mongoose;

const flowerSchema = new Schema({
  flowerId: String,
  price: { type: Number, default: 0 },
  title: String,
  inventory: Number
});

mongoose.model("flowers", flowerSchema);
