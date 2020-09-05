const db = require("../models");

const express = require("express");

const router = express.Router();

router.post("/api/create-test-message", function (req, res) {
  db.react_mysql_template_db.create(req.body).then(function (dbTestMessage) {
    res.json(dbTestMessage);
  });
});


module.exports = router;