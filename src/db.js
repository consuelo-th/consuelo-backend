import mongoose from "mongoose";

mongoose.connect("mongodb://mongo:YJ3uxAIBc49qaNU6ZlNj@containers-us-west-126.railway.app:6228", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error => '));
db.once('open', function () {
  console.log('Database connected successfully ✅ !');
});


export default db;