const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const { parse } = require("node-html-parser");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    const { to, to_name, from, from_name, subject, body } = req.body;
    // let doc = parse(body);

    const msg = {
      to: to,
      from: from,
      subject: subject,
    //   text: "and easy to do anywhere, even with Node.js",
      html: body
    };
    sgMail.send(msg);
    // return res.send(doc);
    return res.send("success");
  }
);

app.listen(process.env.PORT || 8080);
