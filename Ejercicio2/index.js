const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("dev"));

app.get("/currenttime", (request, response) => {
  const time = new Date().toLocaleTimeString();

  response.status(200);
  response.send({
    status: "ok",
    data: `Hora local: ${time}`,
  });
});
app.get("/servercode", (request, response) => {
  response.status(200);
  response.send({ status: "ok", data: { rootFolder: __dirname } });
});

app.use((request, response) => {
  response.statusCode = 404;
  response.send({ status: "error", message: "Not Found" });
});
app.listen(3000, () => {
  console.log(`Server listening at localhost:3000`);
});
