//creating server using express and connecting it to mongoDB database

const express = require("express");
const cors = require("cors");

const { MongoClient } = require("mongodb");

//blogs-app-db is the name of the database stored in mongoDB
const database = "blogs-app-db";

//connection string to connect to the database
const url =
  "mongodb+srv://nitin337:8GR4588im3VYlidt@blogcluster.txoxzb3.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
const app = express();
app.use(express.json());
app.use(cors());

let result = null;
let db = null;
let collection = null;

//connecting to database
async function connectDB() {
  try {
    result = await client.connect();

    db = result.db(database);

    collection = db.collection("blogs-collections");

    console.log("Database Connected ");
  } catch (err) {
    console.log(`DB Error : ${err}`);
  }
}

//initializing the server
app.listen(3001, () => {
  console.log("Server Started");
  connectDB();
});

//api to show all the blogs
app.get("/getData", async (req, res) => {
  let response = await collection.find({}).toArray();
  res.send(response);
});

//api to publish the blog
app.post("/postBlog", async (req, res) => {
  const { title, content } = req.body;

  let response = await collection.insertOne({
    title: title,
    body: content,
  });
  res.status(200);
  res.send("Blog Published Successfully");
});
