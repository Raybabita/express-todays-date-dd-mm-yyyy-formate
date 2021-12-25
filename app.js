const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const newdate = new Date();
  response.send(
    `${newdate.getDate()}-${newdate.getMonth() + 1}-${newdate.getFullYear()}`
  );
});

module.exports = app;
app.listen(3000);
