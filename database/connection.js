require("dotenv").config();
const mongoose = require("mongoose");

let connectionUrl;

if (process.env.ENVIRONMENT === "development") {
  connectionUrl = "mongodb://localhost:27017/consuelo";
} else {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const cluster = process.env.CLUSTER;
  const dbname = process.env.DB_NAME;
  connectionUrl = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
}

mongoose.connect(connectionUrl, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("database connection successful");
  }
});
