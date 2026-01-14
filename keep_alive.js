const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Rich Presence is running!");
});

function keepAlive() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Keep-alive server running on port ${port}`);
  });
}

module.exports = keepAlive;