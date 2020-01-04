const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const restorantsRoutes = require("./routes/restorant.route");
const usersRoutes = require("./routes/user.route");

/**********************Server-port***********************************/
app.listen(PORT, () => console.log(`app is running on ${PORT}`));

/**********************CORS***********************************/
app.use(cors());

/**********************DB-Connection***********************************/
mongoose.connect("mongodb://127.0.0.1:27017/Food_App", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

/**********************Setting-Routes***********************************/
app.use(restorantsRoutes);
app.use(usersRoutes);
