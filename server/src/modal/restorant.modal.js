const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let restorant = new Schema({
  name: {
    type: String
  },
  rid: {
    type: String
  },
  mob: String,
  password: String
});
module.exports = mongoose.model("Restorant", restorant);
