const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let user = new Schema({
  name: {
    type: String
  },
  userid: {
    type: String
  },
  mob: String,
  password: String
});
module.exports = mongoose.model("User", user);
