const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://drisser:DJR390@ds161764.mlab.com:61764/your-project', {useNewUrlParser: true});

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const ProjectRoutes = require("./routes/ProjectRoutes");

app.use(ProjectRoutes);

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
 