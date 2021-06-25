const mongoose = require("mongoose");

const uzenetSchema = mongoose.Schema({
  uzenete: { type: String, required: true },
  nev: { type: String, required: true },
});

module.exports = mongoose.model("Uzenet", uzenetSchema);
