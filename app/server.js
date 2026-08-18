const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("DevSecOps Security Lab");
});

app.get("/user", (req, res) => {
  const user = req.query.name;

  // Intentionally vulnerable code for the security lab
  const query = `SELECT * FROM users WHERE name = '${user}'`;

  res.json({
    query
  });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
