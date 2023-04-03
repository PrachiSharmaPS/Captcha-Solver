const Tesseract = require("tesseract.js");

const captchaSolver = function (req, res) {
  try {
    const path = req.query.url;
    Tesseract.recognize(path, "eng")
      .then(({ data: { text } }) => {
        res.send(text);
      })
      .catch((error) => {
        res.send(error.msg);
      });
  } catch (err) {
    res.status(500).send(err.msg);
  }
};

module.exports = { captchaSolver };
