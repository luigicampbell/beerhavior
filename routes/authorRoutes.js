var express = require('express');
var router = express.Router();
var db = require("../models");
var controller = require("../controllers/authors");

module.exports = router
  .get("/", controller.findAll)
  .get("/:id")
  .post("/")
  .put("/:id")
  .delete("/:id")
