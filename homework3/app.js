const express = require("express");
const app = express();

app.use(express.json());

let countries = [];

app
  .post("/countries", (req, res) => {
    countries.push(req.body);
    res.send(countries);
  })
  .get("/countries", (req, res) => {
    res.send(countries);
  })
  .patch("/countries/:id", (req, res) => {
    countries.forEach(country => {
      if (country.id == req.params.id) {
        if (req.body.name) {
          country.name = req.body.name;
        }
        if (req.body.lang) {
          country.lang = req.body.lang;
        }
      }
    });
    res.send(countries);
  })
  .put("/countries/:id", (req, res) => {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].id == req.params.id) {
        countries[i] = req.body;
      }
    };
    res.send(countries);
  })
  .delete("/countries/:id", (req, res) => {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].id == req.params.id) {
        countries.splice(i, 1);
      }
    };
    res.send(countries);
  })
app.listen("3003");
console.log("App started on 3003 localhost...");