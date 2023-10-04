var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const jwt = require("jsonwebtoken");

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var conString = "mongodb://127.0.0.1:27017";

app.get("/", (req, res) => {
  res.send("<h2>Welcome to My API</h2>");
});

app.get("/druglist", (req, res) => {
  mongoClient.connect(conString).then((clientObject) => {
    var database = clientObject.db("Ecomerce");
    database
      .collection("druglist")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("/users", (req, res) => {
  mongoClient.connect(conString).then((clientObject) => {
    var database = clientObject.db("Ecomerce");
    database
      .collection("users")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});
// app.post("/insert", (req, res) => {
//   mongoClient.connect(conString).then((clientObject) => {
//     var database = clientObject.db("shopping");
//     database
//       .collection("person")
//       .insertOne(req.body, (err, data) => {
//         console.log("data-", req.body);
//         if (err) return console.log("error", err);
//         res.send("saved to db: " + data);
//       })
//       .then((documents) => {
//         res.send(documents);
//         res.end();
//       });
//   });
// });

app.get("*", (req, res) => {
  res.send("<code>Not Found : Page you requested not found.</code>");
});

app.listen(4400);
console.log(`Server Started : http://127.0.0.1:4400`);