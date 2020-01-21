const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const { parse } = require('node-html-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  return res.send("Hello world");
});

app.post(
  "/email",
  [
    check("to")
      .isEmail()
      .normalizeEmail(),
    check("to_name")
      .not()
      .isEmpty(),
    check("from")
      .isEmail()
      .normalizeEmail(),
    check("from_name")
      .not()
      .isEmpty(),
    check("subject")
      .not()
      .isEmpty(),
    check("body")
      .not()
      .isEmpty()
  ],
  function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let doc = parse(req.body.body);

    return res.send(doc)
  }
);

app.listen(process.env.PORT || 8080);
