const express = require("express");

const books = require("./books");

const app = express();

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(3000, () => console.log("Server running"));
