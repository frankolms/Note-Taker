const express = require("express");
const app = express();
const path = require("path");
const notesData = require("./db/db.json");
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.get("/api/notes", (req, res) => res.json(notesData));

app.post("/api/notes", (req, res) => {
  res.json(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
